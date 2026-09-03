import { asyncHandler } from "../middleware/user.middleware.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


//get current user
const getCurrentUser = asyncHandler(async(req, res) => {

    const currentUser = await User.findById(req.user?._id).select("-password");
    console.log(currentUser);
    if(!currentUser){
        throw ApiError(401, "current user not found")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(
            200, 
            currentUser,
            "current user fetched successfully"
        )
    )
})


//update profile controller
const updateProfile = asyncHandler(async(req, res) => {
    const { fullName, description } = req.body;
    const updateData = {
        fullName, 
        description
    };

    let profileLocalPath;
    if(req.file?.avatar?.[0].path){
        profileLocalPath = req.file?.avatar?.[0]?.path
        //upload photo on cloudinary
        const photoUrl = await uploadOnCloudinary(profileLocalPath);
        if(!photoUrl?.url){
            throw new ApiError(400, "something went wrong while uploading profile photo")
        }
        updateData.photoUrl = photoUrl.url;
    }
    
    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set:updateData
        },
        {
            new: true
        }
    ).select("-password");

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            user,
            "Profile Updated Successfully"
        )
    )
    
})


export { 
    getCurrentUser,
    updateProfile
 }