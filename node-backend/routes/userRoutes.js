import express from "express";
import { AddUser, GetAllUsers } from "../controllers/userController.js";

const router = express.Router();

router.post("/adduser", AddUser);
router.get("/getusers", GetAllUsers);

export default router;
