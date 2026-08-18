import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(`HTTP server error`, error);
      throw error;
    });
    app.listen(process.env.PORT || 5000, () => {
      console.log(`server is runing on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`MONGODB connection failed !!!`, error);
    throw error;
  });
