import express from "express";
import {
  lostRequest,
  getItem,
  test,
  getStats,
  getUserItems,
  getItems,
  acceptlostRequest,
  rejectlostRequest,
  deleteRequest,
} from "./../controllers/lostItemRequest.js";
const router = express.Router();
router.get("/userItems", getUserItems);
router.post("/", lostRequest);
router.get("/", getItem);
router.get("/stats", getStats);
router.get("/getItemsForAdmin", getItems);
router.patch("/acceptRequest/", acceptlostRequest);
router.patch("/rejectRequest/", rejectlostRequest);
router.delete("/deleteRequest/", deleteRequest);
export default router;
