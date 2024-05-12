import express from "express";
import {
  lostRequest,
  getItem,
  test,
  getStats,
} from "./../controllers/lostItemRequest.js";
const router = express.Router();

router.post("/", lostRequest);
router.get("/", getItem);
router.get("/stats", getStats);
export default router;
