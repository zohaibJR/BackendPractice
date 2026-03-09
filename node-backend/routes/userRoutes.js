import express from "express"; // FIX: added quotes
import { AddUser } from "../controllers/userController.js"; // FIX: added .js extension

const router = express.Router();

// FIX: POST API for adding user
router.post("/adduser", AddUser);

export default router;