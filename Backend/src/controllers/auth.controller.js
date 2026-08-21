import { asyncHandler } from "../middleware/user.middleware.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import validator from "validator";
import { ApiResponse } from "../utils/ApiResponse.js";
import sendMail from "../utils/sendMail/sendMail.js";

const generateAccessToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError(401, `user not found while generating access token`);
    }

    const accessToken = await user.generateAccessToken();

    return { accessToken };
  } catch (error) {
    throw new ApiError(
      500,
      `something went wrong while generating access token`,
    );
  }
};

//register or sinup
const signUp = asyncHandler(async (req, res) => {
  //get user details from frontend
  //validate
  //check user  already exist?
  // check email through validator
  //strong password
  // hash password
  //user create and entry in db
  // save user
  //return res

  // getting details from frontend
  const { fullName, username, email, password, role } = req.body;

  //validate
  if (
    [fullName, username, password, role].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, `All fields are required`);
  }

  //check user already exist or not
  const isUserAlreadyExist = await User.findOne({ email });
  if (isUserAlreadyExist) {
    throw new ApiError(400, `user already exist`);
  }

  //check email is valid or correct format
  if (!validator.isEmail(email)) {
    throw new ApiError(400, `please enter valid email`);
  }

  //check password strong
  if (password.length < 8) {
    throw new ApiError(
      400,
      `create strong password, passord must be atleast of 8 numbers or characters`,
    );
  }


  //creating user
  const user = await User.create({
    fullName,
    username,
    email,
    password,
    role,
  });

const { accessToken } = await generateAccessToken(user?._id);

  const createdUser = await User.findById(user?._id).select("-password");
  if (!createdUser) {
    throw new ApiError(401, "created user not found");
  }

  // generating access token



// const user = await findById(createdUser?._id);
// if(!user){
//   throw new ApiError(
//     401,
//     "user not found"
//   )
// }

const options = {
  httpOnly: true,
  secure: false
}

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(new ApiResponse(200, createdUser, "User registered successfully"));
});

//login
const login = asyncHandler(async (req, res) => {
  //get user details from frontend
  //validate
  //find user, if not exist give msg not registered yet
  //check password- correct or not
  //generate  access token
  // return res

  //taking details from frontend
  const { email, password } = req.body;
  //validate
  if (email?.trim() === "") {
    throw new ApiError(400, `email is required`);
  }

  if (!password) {
    throw new ApiError(400, `password is required`);
  }

  // find user
  const existedUser = await User.findOne({email});
  if (!existedUser) {
    throw new ApiError(401, `you aren't registered yet`);
  }

  // check password
  const isPasswordCorrect = await existedUser.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    throw new ApiError(400, `wrong password`);
  }

  //generating access token
  const { accessToken } = await generateAccessToken(existedUser?._id);

  const options = {
    httpOnly: true,
    secure: false,
  };

  const user = await User.findById(existedUser?._id).select("-password");

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(new ApiResponse(200, user, `Logged in successfully`));
});

//logout
const logout = asyncHandler(async (req, res) => {
  // first verify user is authenticated by verifyJWT
  //then find user by id
  //clear cookie

  const options = {
    httpOnly: true,
    secure: false,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .json(new ApiResponse(200, {}, `LogOut successfully`));
});

// send otp controller
const  sendOTP = asyncHandler(async(req, res) => {
     const { email } = req.body;
     const user = await User.findOne({email})
     if(!user){
      throw new ApiError(401, "user not found for reset password")
     }
     const otp = Math.floor(Math.random()*(9999-1000+1)) + 1000;
     user.passResetOtp = otp;
     user.otpExpires = Date.now() +5 * 60 * 1000;
     user.isOtpVerified = false
     
     await user.save();
     await sendMail(email, otp);

     return res
     .status(200)
     .json(
      new ApiResponse(
        200,
        {},
        "Otp Sent Successfully"
      )
     )
})

// verify Otp controller
const verifyOTP = asyncHandler(async(req, res) => {
  const { email, otp } = req.body;
  const user = User.findOne({email});
  if(!user){
    throw new ApiError(401, "user not found during otp verification")
  };

  if(user.passResetOtp != otp || user.otpExpires < Date.now()){
    throw new ApiError(400, "Invalid OTP")
  };

  user.isOtpVerified = true;
  user.resetOtp = undefined;
  user.otpExpires = undefined;

  await user.save();

  return res
  .status(200)
  .json(
    new ApiResponse(
      200,
      {},
      "Otp Verified Successfully"
    )
  )

})

// reset password

const resetPassword = asyncHandler(async(req, res) => {
  const { email, password } = req.body;

  const user = await findOne({ email });

  if(!user || !user.isOtpVerified){
    throw new ApiError(400, "OTP Verification is required")
  }

  user.password = password;
  user.isOtpVerified = false;

  await user.save();

  return res
  .status(200)
  .json(
    new ApiResponse(
      200,
      {},
      "Reset Password Successfully"
    )
  )
})





export { signUp, login, logout, sendOTP, verifyOTP, resetPassword };
