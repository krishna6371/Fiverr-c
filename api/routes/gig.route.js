import express from "express";
// import {
//   createGig,
//   deleteGig,
//   getGig,
//   getGigs
// } from "../controllers/gig.controller.js";
import {
  createGig,
  deleteGig,
  getGig,
  getGigs,
} from "../controller/gig.controller.js";

import { verifyToken } from "../middleware/jwt.js";
const router = express.Router();
// console.log("create gig");
router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/single/:id", getGig);
router.get("/", getGigs);

export default router;
