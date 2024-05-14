import item from "./../model/lostItem.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "./../model/usermodel.js";
import claim from "./../model/claim.js";

const CreateClaimRequest = asyncHandler(async (req, res) => {
  try {
    console.log("Hello");
    console.log(req.body.token);
    if (!req.body.token) {
      throw new ApiError(401, "Unauthorized request");
    }
    const decodedToken = jwt.verify(req.body.token, "abc123");
    const user = await User.findById(decodedToken?._id);
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }
    console.log(req.body);
    const { description, item } = req.body;
    if (!description || !item) {
      throw new ApiError(400, "Please fill all fields");
    }
    const claimItem = await claim.create({
      user: user._id,
      item,
      description,
    });
    if (claimItem) {
      res.status(201).json({
        ok: true,
        _id: claimItem._id,
      });
    } else {
      throw new ApiError(400, "Invalid data");
    }
  } catch (error) {
    next(error);
  }
});
const deleteClaimRequest = asyncHandler(async (req, res) => {
  try {
    console.log("Hello");
    console.log(req.body.token);
    if (!req.body.token) {
      throw new ApiError(401, "Unauthorized request");
    }
    const decodedToken = jwt.verify(req.body.token, "abc123");
    const user = await User.findById(decodedToken?._id);
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }
    console.log(req.body);
    const { id } = req.body;
    if (!id) {
      throw new ApiError(400, "Please fill all fields");
    }
    const claimItem = await claim.findByIdAndDelete(id);
    if (claimItem) {
      res.status(201).json({
        ok: true,
        _id: claimItem._id,
      });
    } else {
      throw new ApiError(400, "Invalid data");
    }
  } catch (error) {
    next(error);
  }
});
