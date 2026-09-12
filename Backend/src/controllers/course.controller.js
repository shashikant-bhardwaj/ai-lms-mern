import { asyncHandler } from "../middleware/user.middleware.js";
import { Courses } from "../models/courses.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

// create course controller
const createCourse = asyncHandler(async (req, res) => {
  const { title, category } = req.body;
  if (!title || !category) {
    throw new ApiError(400, "Title and Category is Required ");
  }

  const course = await Courses.create({
    title,
    category,
    creator: req.user?._id,
  });

  return res.status(200).json(new ApiResponse(200, course, "Created"));
});

//get all courses controller
const getPublishedCourses = asyncHandler(async (req, res) => {
  const courses = await Courses.find({ isPublished: true });
  if (!courses) {
    throw new ApiError(401, "Courses not found");
  }

  return res.status(200).json(new ApiResponse(200, courses));
});

//get created courses of creator
const createdCourses = asyncHandler(async (req, res) => {
  const courses = await Courses.find({ creator: req.user?._id }).sort({
    createdAt: -1,
  });
  if (!courses) {
    throw new ApiError(401, "Courses is not found");
  }

  return res.status(200).json(new ApiResponse(200, courses));
});

//Edit courses controller
const editCourse = asyncHandler(async (req, res) => {
  const { courseId } = req.params;

  const { title, subTitle, description, category, level, isPublished, price } =
    req.body;
  const updatedData = {
    title,
    subTitle,
    description,
    category,
    level,
    isPublished,
    price,
  };
  let thumbnail;
  if (req.file) {
    const thumbnailPath = req.file?.path;
    //upload on cloudinary
    thumbnail = await uploadOnCloudinary(thumbnailPath);
  }

  // update
  const courses = await Courses.findByIdAndUpdate(
    {
        _id: courseId,
        creator: req.user?._id
    },
    {
      $set: updatedData,
    },
    {
      new: true,
    },
  );

  return res.status(200).json(new ApiResponse(200, courses));
});

//get courses by id
const  getCoursesById = asyncHandler(async(req, res) => {
    const { courseId } = req.params;
    let course = await Courses.findById(courseId);
    if(!course){
        throw new ApiError(401, "course is not  found by id");

    }
    return res.status(200).json(new ApiResponse(200, course));
    
})


//remove course controller
const removeCourse = asyncHandler(async(req, res) => {
  const { courseId } = req.params;
  const course = await Courses.findById({courseId});
  const deleteCourse = await Courses.findByIdAndDelete(
    courseId,
    {
      new :true
    }
  )

  return res
  .status(200)
  .json(
    new ApiResponse(
      200,
      {},
      "Deleted Successfully"
    )
  )
})


export {
  createCourse,
  getPublishedCourses,
  createdCourses,
  editCourse,
  getCoursesById,
  removeCourse
}