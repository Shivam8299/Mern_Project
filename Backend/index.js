import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

dotenv.config();
const aap = express();
aap.use(express.json());

//database calling
connectDb();

aap.get("/", (req, res) => {
  res.send("server is running on port 3000");
});

const port = process.env.PORT || 4000;

aap.listen(port, (error) => {
  if (error) {
    console.log("something went wrong", error);
  } else {
    console.log(`server is running on port ${port}`);
  }
});
