import jwt from "jsonwebtoken";
import User from "./../model/usermodel.js";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import dotenv from "dotenv";

import { ApiError } from "../utils/ApiError.js";
dotenv.config({ path: "./config.env" });

const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    throw new ApiError(400, "Please fill all fields");
  }
  //  Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new ApiError(401, "User already exists");
  }
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    fullName,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      token: generateToken(user._id, user.email),
    });
  } else {
    res.status(400);
    throw new ApiError("Invalid user data");
  }
});

const LoginUser = asyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new ApiError("Please fill all fields");
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        status: "success",
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        token: generateToken(user._id, user.email),
        userType: "user", // set this later, SAMAMA BHAI !~~~~~~~~~~~
      });
    } else {
      throw new ApiError(400, "Invalid email or password");
    }
  } catch (err) {
    next(err);
  }
});

const generateToken = (_id, email) => {
  return jwt.sign({ _id, email }, "abc123", {
    expiresIn: "1d",
  });
}; // Add a closing curly brace here
export { registerUser, LoginUser };
