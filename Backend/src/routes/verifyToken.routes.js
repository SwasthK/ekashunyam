import express from "express";
import { handleVerifyToken } from "../controllers/handleVerifyToken.controllers.js";
const router = express.Router();
router.post("/", handleVerifyToken);

export default router;
