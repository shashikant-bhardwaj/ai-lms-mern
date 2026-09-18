import express from "express"
import Router from "express"
import { verifyJWT } from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.middleware.js";
import { createCourse, createdCourses, editCourse, getCourseById, getPublishedCourses, removeCourse } from "../controllers/course.controller.js";

const router = Router();
//routes
router.route("/create").post(verifyJWT, createCourse);
router.route("/publishedcourse").get(getPublishedCourses);
router.route("/creatorcourses").get(verifyJWT, createdCourses);
router.route("/editcourse/:courseId").post(verifyJWT, upload.single("thumbnail"), editCourse);
router.route("/coursebyid/:courseId").get(verifyJWT, getCourseById);
router.route("/removecourse/:courseId").post(verifyJWT, removeCourse);



export default router;