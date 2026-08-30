import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { googleLogin, googleSignUp, login, logout, resetPassword, sendOTP, signUp, verifyOTP } from "../controllers/auth.controller.js";

const router = Router();

//routes
router.route("/signup").post(signUp);
router.route("/login").post(login);
router.route("/sendotp").post(sendOTP);
router.route("/verifyotp").post(verifyOTP);
router.route("/resetpassword").post(resetPassword);
router.route("/google-authentication").post(googleSignUp);
router.route("/google-login").post(googleLogin);

//secure routes
router.route("/logout").post(verifyJWT, logout);


export default router;
