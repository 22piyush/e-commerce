import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();

import { postLogin, postSignUp } from "./controllers/user.js";

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  if (conn) {
    console.log("connected to mongodb");
  }
};

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is up and Running...",
  });
});

// Sign up endpoint
app.post("/signup", postSignUp);
app.post("/login", postLogin);

// Catch-all for undefined routes
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
