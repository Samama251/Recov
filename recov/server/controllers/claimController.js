import item from "./../model/lostItem.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "./../model/usermodel.js";
import claim from "./../model/claim.js";

const createClaimRequest = asyncHandler(async (req, res) => {
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
    const { description, itemId, additionalInfo } = req.body;
    console.log("Error at line 22");
    if (!description || !itemId) {
      throw new ApiError(400, "Please fill all fields");
    }
    console.log("Error at line 26");
    const claimItem = await claim.create({
      user: user._id,
      item: itemId,
      description,
      additionalInfo,
    });
    if (claimItem) {
      res.status(201).json({
        ok: true,
        _id: claimItem._id,
      });
    } else {
      console.log("Error at line 37");
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

export { createClaimRequest, deleteClaimRequest };