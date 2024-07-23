import express from "express";
// // import { delteUser } from "../controller/user.controller";
// import { deleteUser } from "../controllers/user.controller.js";

import { deleteUser } from "../controller/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";
import { getUser } from "../controller/user.controller.js";
const router = express.Router();

router.delete("/:id", verifyToken, deleteUser);
router.get("/:id", getUser);
// router.get("/test", delteUser);
export default router;
