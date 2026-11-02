import { Router } from "express";
import {
  login,
  logout,
  register,
  showLogin,
  showRegister,
} from "../controllers/auth.controller.js"
import { isGuest, isLoggedIn } from "../middleware/auth.middleware.js";

const router = Router()

router.get("/register", isGuest, showRegister);
router.post("/register", isGuest, register);
router.get("/login", isGuest, showLogin);
router.post("/login", isGuest, login);
router.post("/logout", isLoggedIn, logout);

export default router
