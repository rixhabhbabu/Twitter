import { Router } from "express";
import {
  redirectToMyProfile,
  showEditProfile,
  showProfile,
  updateProfile,
} from "../controllers/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/profile", isLoggedIn, redirectToMyProfile);
router.get("/profile/edit", isLoggedIn, showEditProfile);
router.patch("/profile", isLoggedIn, updateProfile);
router.get("/user/:username", showProfile);

export default router;
