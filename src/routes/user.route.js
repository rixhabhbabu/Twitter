import { Router } from "express";
import { showProfile } from "../controllers/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/profile", isLoggedIn, showProfile);

export default router;
