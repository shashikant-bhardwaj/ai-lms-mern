import { asyncHandler } from  "../middleware/user.middleware.js"
import { Courses } from "../models/courses.model.js";
import { Lecture } from "../models/lecture.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";





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
            course,
            "Lectures Created"
        )
    )
})




export  {
    createLecture
}

