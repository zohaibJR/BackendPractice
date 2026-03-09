import express from "express"; 
import { AddPlayer } from "../controllers/playerController.js"

const router = express.Router();

router.post("/addplayer", AddPlayer);

export default router;