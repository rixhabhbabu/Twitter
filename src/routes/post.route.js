import { Router } from "express";
import { createPost, deletePost, showEditPost, showPost, updatePost } from "../controllers/post.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";
import { uploadPostImage } from "../middleware/upload.middleware.js";

const router = Router();
router.post("/posts", isLoggedIn, uploadPostImage, createPost);
router.get("/posts/:id", showPost);
router.get("/posts/:id/edit", isLoggedIn, showEditPost);
router.put("/posts/:id", isLoggedIn, uploadPostImage, updatePost);
router.delete("/posts/:id", isLoggedIn, deletePost);
export default router;
