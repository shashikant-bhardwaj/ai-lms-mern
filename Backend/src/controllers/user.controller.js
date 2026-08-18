import { asyncHandler } from "../middleware/user.middleware.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


//get current user
const getCurrentUser = asyncHandler(async(req, res) => {

    const currentUser = await User.findById(req.user?._id);
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


export { 
    getCurrentUser
 }