import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function connectDb() {
  try {
    await mongoose.connect(process.env.DB_STRING);
    console.log("connected with DB");
  } catch (error) {
    console.log("connection failed", error);
  }
}

export default connectDb;
