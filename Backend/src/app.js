import express from "express"
import { urlencoded } from "express";
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express();
//Configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cookieParser());

// import router
import userRouter from "./routes/user.route.js"

//user route 
app.use("/api/v1/users", userRouter)






export{ app }