import { asyncHandler } from  "../middleware/user.middleware.js"
import { Courses } from "../models/courses.model.js";
import { Lecture } from "../models/lecture.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";





// create lectrue controller

const createLecture = asyncHandler(async(req, res) => {
    const {lectureTitle} = req.body;
    const {courseId} = req.params;
    console.log("Request body:", req.body);
    console.log("Course ID:", req.params.courseId);

    if(!(lectureTitle && courseId)){
        throw new ApiError(400, "lecture title is required!");
    }

      const course = await Courses.findById(courseId);
      if(!course){
        throw new ApiError(404, "Course not found !");
      }

    const lecture = await Lecture.create({ lectureTitle });
console.log("2. Lecture created:", lecture);

console.log("3. Course lectures before push:", course.lectures);

course.lectures.push(lecture._id);
console.log("4. Lecture ID pushed");

await course.save();
console.log("5. Course saved");

await course.populate("lectures");
console.log("6. Lectures populated");

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
    console.log("courseLecture" , course.lectures)

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
    let { isPreviewFree, lectureTitle } = req.body;

    const lecture = await Lecture.findById(lectureId);
    if(!lecture){
        throw new ApiError(404, "lecture is not found");
    }

    let videoUrl;
    if(req.file){
        const videoLocalPath = req.file?.path;
        const  upload = await uploadOnCloudinary(videoLocalPath);
        videoUrl = upload?.url; 
        lecture.videoUrl = videoUrl; 
    }
    if(lectureTitle){
        lecture.lectureTitle = lectureTitle;
    }

    if(isPreviewFree != undefined){
        isPreviewFree = isPreviewFree === "true";
        lecture.isPreviewFree = isPreviewFree;
    }

    

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

    if (!lecture) {
        throw new ApiError(404, "Lecture is not found");
    }

    await Courses.updateMany(
        { lectures: lecture._id },
        { $pull: { lectures: lecture._id } }
    );

    await Lecture.findByIdAndDelete(lecture._id);

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            {},
            "Lecture Removed"
        )
    )
})




export  {
    createLecture,
    getCourseLecture,
    editLecture,
    removeLecture
}

