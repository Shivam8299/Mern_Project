// route for login user

import userModel from "../models/userModel.js";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "user doesn't exists with this email",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({
        success: true,
        token,
      });
    } else {
      res.json({
        success: false,
        message: "incorrct email or password",
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//for token

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// route for register user

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // checking user already exists or not

    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.json({
        success: false,
        message: "user already exists with this email",
      });
    }

    //validating email and password

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "please enter valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "password must have 8 character or symbols",
      });
    }

    //hashing password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    return res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// route for admin login

const adminLogin = async () => {
  try {
  } catch (error) {}
};

export { loginUser, registerUser, adminLogin };
