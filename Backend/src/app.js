import express from "express"
import { urlencoded } from "express";
import { app } from "./index.js"
import cookieParser from "cookie-parser"


//Configuration
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cookieParser());

// import router
import userRouter from "./routes/user.route.js"

//user route 
app.use("api/v1/users", userRouter)