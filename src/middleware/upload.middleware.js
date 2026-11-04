import { randomUUID } from "node:crypto";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import multer from "multer";
import { removeLocalFile } from "../services/cloudinary.service.js";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const uploadDirectory = path.resolve(currentDirectory, "../uploads");

mkdirSync(uploadDirectory, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, uploadDirectory);
  },
  filename: (_req, file, callback) => {
    const extension = path.extname(file.originalname).toLowerCase();
    callback(null, `${Date.now()}-${randomUUID()}${extension}`);
  },
});

const fileFilter = (_req, file, callback) => {
  if (!file.mimetype.startsWith("image/")) {
    return callback(new Error("Only image files are allowed."));
  }
  return callback(null, true);
};

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter,
});

const parseProfileImages = upload.fields([
  { name: "profilePicture", maxCount: 1 },
  { name: "coverPicture", maxCount: 1 },
]);

export const uploadProfileImages = (req, res, next) => {
  parseProfileImages(req, res, async (error) => {
    if (!error) return next();

    const partialFiles = Object.values(req.files ?? {}).flat();
    await Promise.all(partialFiles.map((file) => removeLocalFile(file.path)));

    if (error.code === "LIMIT_FILE_SIZE") {
      req.flash("error", "Each image must be 5 MB or smaller.");
    } else if (
      error.code === "LIMIT_UNEXPECTED_FILE" ||
      error.code === "LIMIT_UNEXPECTED_FIELD"
    ) {
      req.flash("error", "Use only the profile picture and cover picture fields.");
    } else if (error.message === "Only image files are allowed.") {
      req.flash("error", error.message);
    } else if (error instanceof multer.MulterError) {
      req.flash("error", "The image upload could not be completed.");
    } else {
      return next(error);
    }

    return res.redirect("/profile/edit");
  });
};
