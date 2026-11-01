import { asyncHandler } from "../middleware/user.middleware.js";
import { Courses } from "../models/courses.model.js";
import { Review } from "../models/review.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";



const createReview = asyncHandler(async(req, res) => {
    const { rating, comment, courseId } = req.body;
    const userId = req.user;

    const course = await Courses.findById(courseId);
    if(!course){
        throw new ApiError(404, "Course is not found")
    }

    const alreadyReviewed = await Review.findOne({course: courseId, user: userId})
    if(alreadyReviewed){
        throw new ApiError(400, "You have already reviewed this course")
    }

    const review = new Review({
        course: courseId,
        user: userId,
        rating,
        comment
    })
    await review.save();

    await course.review.push(review?._id);
    await course.save();

    return res
    .status(201)
    .json(
        new ApiResponse(
            201,
            review,
            "Review Submitted"
        )
    )

})


const getReview = asyncHandler(async(req, res) => {
    const { courseId } = req.body;

    const review = await Review.find({courseId}).populate("user",
         "fullName photoUrl role" ).sort({reviewAt: -1});

})


export {createReview}