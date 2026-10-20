import Route from "express"
import { verifyJWT } from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.middleware.js";
import { createLecture, editLecture, getCourseLecture, removeLecture } from "../controllers/lecture.controller.js";

const router = Route();

//routes
router.route("/createlecture/:courseId").post(verifyJWT, createLecture);
router.route("/editlecture/:lectureId").post(verifyJWT, upload.single("videoUrl"), editLecture);
router.route("/getcourselecture/:courseId").get(verifyJWT, getCourseLecture);
router.route("/removelecture/:lectureId").delete(verifyJWT, removeLecture);



export default router;