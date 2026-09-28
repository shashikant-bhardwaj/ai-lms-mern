import { asyncHandler } from  "../middleware/user.middleware.js"
import { Courses } from "../models/courses.model.js";
import { Lecture } from "../models/lecture.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";





// create lectrue controller

const createLecture = asyncHandler(async() => {
    const {lectureTitle} = req.body;
    const {courseId} = req.params;

    if(!(lectureTitle && courseId)){
        throw new ApiError(400, "lecture title is required!");
    }

      const course = await Courses.findById(courseId);
      if(!course){
        throw new ApiError(404, "Course not found !");
      }

    const lecture = await Lecture.create({lectureTitle});
    
    course.lectures.push(lecture._id);
    await course.save();

    await course.populate("lectures");

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            {lecture,course},
            "Lectures Created"
        )
    )
})


//getting course lecture

const getCourseLecture = asyncHandler(async(req, res) => {
    const { courseId } = req.params;
    const course = await Courses.findById(courseId).populate("lectures");
    if(!course){
        throw new ApiError(404, "course is not found !");
    }

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            course.lectures,
            "lecture fetched Successfully"
        )
    )


})


//Edit lecture 

const editLecture = asyncHandler(async(req, res) => {
    const { lectureId } = req.params;
    const { isPreviewFree, lectureTitle } = req.body;

    const lecture = await Lecture.findById(lectureId);
    if(!lecture){
        throw new ApiError(404, "lecture is not found");
    }

    let videoUrl;
    if(req.file){
        const videoLocalPath = req.file?.path;
        const  upload = await uploadOnCloudinary(videoLocalPath);
        const videoUrl = upload?.url;   
    }
    if(lectureTitle){
        lecture.lectureTitle = lectureTitle;
    }

    lecture.isPreviewFree = isPreviewFree;

    await lecture.save();

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            lecture,
            "Edited"
        )
    )
})


//remove lecture controller

const removeLecture = asyncHandler(async(req, res) => {
    const {lectureId} = req.params;

    const lecture = await Lecture.findById(lectureId);
    if(!lecture){
        throw new ApiError(400, "Lecture is not found");
    }
})




export  {
    createLecture,
    getCourseLecture,
    editLecture
}

