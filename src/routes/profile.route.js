import { Router } from "express";
import { updateProfileImages } from "../controllers/profile.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";
import { uploadProfileImages } from "../middleware/upload.middleware.js";

const router = Router();

router.post(
  "/profile/images",
  isLoggedIn,
  uploadProfileImages,
  updateProfileImages,
);

export default router;
