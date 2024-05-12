import item from "./../model/lostItem.js";

import asyncHandler from "express-async-handler";

const lostRequest = asyncHandler(async (req, res) => {
  const {
    userName,
    email,
    itemName,
    category,
    description,
    image,
    location,
    date,
  } = req.body;
  if (
    !userName ||
    !email ||
    !itemName ||
    !category ||
    !description ||
    !location
  ) {
    res.status(400);
    throw new Error("Please fill all fields");
  }
  const lostitem = await item.create({
    userName,
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
      _id: lostitem._id,
      userName: lostitem.userName,
      email: lostitem.email,
      itemName: lostitem.itemName,
      category: lostitem.category,
      description: lostitem.description,
      image: lostitem.image,
      location: lostitem.location,
    });
  } else {
    res.status(400);
    throw new Error("Invalid data");
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
      categoryCounts,
      totalItems,
      totalLostItems,
      totalFoundItems,
    });
  } catch (error) {
    throw new ApiError(400, "Error in getting stats");
  }
});
export { lostRequest, getItem, test, getStats };
