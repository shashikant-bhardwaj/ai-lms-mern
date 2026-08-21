import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { login, logout, resetPassword, sendOTP, signUp, verifyOTP } from "../controllers/auth.controller.js";

const router = Router();

//routes
router.route("/signup").post(signUp);
router.route("/login").post(login);

//secure routes
router.route("/logout").post(verifyJWT, logout);
router.route("/sendotp").post(verifyJWT, sendOTP)
router.route("/verifyotp").post(verifyJWT, verifyOTP)
router.route("/resetpassword").post(verifyJWT, resetPassword)

export default router;
