import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import cors from 'cors'
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";

//app config

const port = process.env.PORT || 3000;
dotenv.config();
const aap = express();
connectDb();
connectCloudinary()

//middlewares
aap.use(cors())
aap.use(express.json());


// api endpoint

aap.use('/api/user',userRouter)


aap.get("/", (req, res) => {
  res.send("Welcome to home page");
});



aap.listen(port, (error) => {
  if (error) {
    console.log("something went wrong", error);
  } else {
    console.log(`server is running on port ${port}`);
  }
});
