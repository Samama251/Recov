import item from "./../model/lostItem.js";

import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "./../model/usermodel.js";
const lostRequest = asyncHandler(async (req, res) => {
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
    const { email, itemName, category, description, image, location, date } =
      req.body;
    if (!email || !itemName || !category || !description || !location) {
      throw new ApiError(400, "Please fill all fields");
    }
    const lostitem = await item.create({
      user: user._id,
      email,
      itemName,
      category,
      description,
      image,
      location,
      date,
    });
    if (lostitem) {
      res.status(201).json({
        ok: true,
        _id: lostitem._id,
      });
    } else {
      throw new ApiError(400, "Invalid data");
    }
  } catch (error) {
    next(error);
  }
});
const getItem = asyncHandler(async (req, res) => {
  console.log("Hello");
  const page = parseInt(req.query.page);
  const pageSize = 10;

  const startIndex = (page - 1) * pageSize;

  const paginatedItems = await item.find().skip(startIndex).limit(pageSize);
  const totalItems = await item.countDocuments();

  const totalPages = Math.ceil(totalItems / pageSize);

  // Send the paginated products and total pages as the API response
  res.json({ items: paginatedItems, totalPages });
});
const test = (req, res) => {
  res.json({
    message: "Hello",
  });
};

const getStats = asyncHandler(async (req, res) => {
  try {
    const categoryresult = await item.aggregate([
      {
        $group: {
          _id: "$category", // Group by category field
          count: { $sum: 1 }, // Count documents in each group
        },
      },
    ]);
    const categoryCounts = {}; // Initialize an empty object

    // Iterate through the result array and construct the categoryCounts object
    categoryresult.forEach((item) => {
      categoryCounts[item._id] = item.count;
    });
    const totalItems = await item.countDocuments();
    const totalLostItems = await item.countDocuments({ itemType: "lost" });
    const totalFoundItems = await item.countDocuments({ itemType: "found" });
    res.json({
      data: { categoryCounts, totalItems, totalLostItems, totalFoundItems },
      ok: true,
    });
  } catch (error) {
    throw new ApiError(400, "Error in getting stats");
  }
});
const getUserItems = asyncHandler(async (req, res) => {
  try {
    if (!req.body.token) {
      throw new ApiError(401, "Unauthorized request");
    }
    const { token } = req.body;
    const decodedToken = jwt.verify(token, "abc123");
    console.log("decoded token:", decodedToken);
    const user = await User.findById(decodedToken?._id);
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }
    const userToFound = user._id;
    const userItems = await item.find({ user: userToFound });
    let itemstoMap = [];
    for (let i = 0; i < userItems.length; i++) {
      let item = userItems[i];
      itemstoMap.push({
        itemName: item.itemName,
        status: item.itemType,
      });
    }
    res.json({
      data: {
        items: itemstoMap,
      },
      status: 201,
      ok: true,
    });
  } catch (error) {
    next(error);
  }
});
export { lostRequest, getItem, test, getStats, getUserItems };
