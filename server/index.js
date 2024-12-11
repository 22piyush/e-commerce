import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  if (conn) {
    console.log("connected to mongodb");
  }
};

app.get = ("/health",(req, res) => {
    res.json({
      success: true,
      message: "Server is up and Running...",
    });
});

app.use("*",(req,res)=>{
  res.status(404).json({
    success:false,
    message:"Route Not Found"
  })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
