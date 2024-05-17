import express from "express";
import {
  lostRequest,
  getItem,
  test,
  getStats,
  getUserItems,
  getItems,
} from "./../controllers/lostItemRequest.js";
const router = express.Router();
router.get("/userItems", getUserItems);
router.post("/", lostRequest);
router.get("/", getItem);
router.get("/stats", getStats);
router.get("/getItemsForAdmin", getItems);
export default router;
