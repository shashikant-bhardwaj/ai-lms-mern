import express from "express";
import { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
//Configuration
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// import router
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";

//auth route
app.use("/api/v1/auth", authRouter);

//user route
app.use("/api/v1/users", userRouter )






//error handler
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "internal server error"
  });
});

export { app };
