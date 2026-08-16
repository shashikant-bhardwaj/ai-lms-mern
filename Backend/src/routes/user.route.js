import { Router } from "express";
import { signUp } from "../controllers/auth.controller.js";





const router = Router();

//routes
router.route(`/signup`).post(signUp)








export default router;
