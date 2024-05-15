import express from "express";
import {
  createClaimRequest,
  deleteClaimRequest,
  getClaimRequest,
} from "./../controllers/claimController.js";
const router = express.Router();

router.post("/createClaim", createClaimRequest);
router.delete("/deleteClaim", deleteClaimRequest);
router.get("/getClaim", getClaimRequest);
export default router;
