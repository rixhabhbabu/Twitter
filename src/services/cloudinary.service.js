import { unlink } from "fs/promises";
import cloudinary from "../config/cloudinary.config.js";

// Image ko Cloudinary pe upload karta hai, { url, publicId } wapas deta hai
export const uploadImage = async (filePath, { folder, transformation } = {}) => {
  if (!filePath) {
    throw new Error("File path is required for upload.");
  }

  const result = await cloudinary.uploader.upload(filePath, {
    folder,
    resource_type: "image",
    transformation,
  });

  return { url: result.secure_url, publicId: result.public_id };
};

// Purani image Cloudinary se hatata hai
export const deleteImage = async (publicId) => {
  if (!publicId) return;

  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("Cloudinary delete failed:", error.message);
  }
};

// uploads/ folder ki temporary file delete karta hai
export const removeLocalFile = async (filePath) => {
  if (!filePath) return;

  try {
    await unlink(filePath);
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.error("Local file delete failed:", error.message);
    }
  }
};