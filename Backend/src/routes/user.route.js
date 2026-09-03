import { Router } from "express";
import { getCurrentUser, updateProfile } from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.middleware.js";


const router = Router();

//secure routes
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/update-profile").post(upload.fields([{name: "avatar", maxCount: 1}]), updateProfile)

export default router;

