import express from "express";
import {
    createClaimRequest,
    deleteClaimRequest,
} from "./../controllers/claimController.js";
const router = express.Router();

router.post("/createClaim", createClaimRequest);
router.post("/deleteClaim", deleteClaimRequest);

export default router;