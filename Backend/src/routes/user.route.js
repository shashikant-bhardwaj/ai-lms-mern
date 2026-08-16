import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { logout, signUp } from "../controllers/auth.controller.js";

const router = Router();

//routes
router.route("/signup").post(signUp);
router.route(`/login`).post(logout);

//secure routes
router.route(`/logout`).post(verifyJWT, logout);

export default router;
