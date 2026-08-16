import { asyncHandler } from "../middleware/user.middleware";
import { ApiError } from "../utils/ApiError";
import { User } from "../models/user.model";
import validator from "validator"
import { ApiResponse } from "../utils/ApiResponse";

const generateAccessToken = async(userId) => {
   try {
      const user = await User.findById(userId)
      if(!user){
         throw new ApiError(401, `user not found while generating access token`);
      }

      const accessToken = await User.generateAccessToken();

      return { accessToken }
      
   } catch (error) {
      throw new ApiError(500, `something went wrong while generating access token`)
   }
}

   //register or sinup
const  signUp = asyncHandler(async(req, res) => {
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
    const {fullName, username, email, password, role} = req.body;

    //validate
    if([fullName, username, password, role ].some((field) => 
          field?.trim() === "")){
            
            throw new ApiError(400, `All fields are required`)
          };

    //check user already exist or not
     const isUserAlreadyExist = await User.findOne({email});
     if(isUserAlreadyExist){
        throw new ApiError(400, `user already exist`)
     }    

     //check email is valid or correct format
     if(!validator.isEmail(email)){
       throw new ApiError(400, `please enter valid email`)
     }
    
     //check password strong
     if(password.length < 8){
        throw new ApiError(400, `create strong password, passord must be atleast of 8 numbers or characters`)
     }
     
     // generating access token
     const { accessToken } = await generateAccessToken();
      if(!accessToken){
         throw new ApiError(401, `access token not found`)
      }

      //creating user
     const user = await User.create({
        fullName,
        username,
        email,
        password,
        role
     }).Select("-password")

     return res
     .status(200)
     .json(
        new ApiResponse(
            200, 
            user,
            "User registered successfully"
        )
     );
})















export { 
   signUp
 }