import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();

import jwt from "jsonwebtoken";
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

app.get("/test", (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  const tokenValue = token.split(" ")[1];
 
  try {
    const decoded = jwt.verify(tokenValue, process.env.JWT_SECRET);

    return res.json({
      success: true,
      message: "Token is Valid",
      data: decoded,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Token is invalid",
    });
  }
});


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
