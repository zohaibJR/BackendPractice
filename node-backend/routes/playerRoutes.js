import express from "express"; 
import { AddPlayer, GetPakistaniPlayer } from "../controllers/playerController.js"

const router = express.Router();

router.post("/addplayer", AddPlayer);
router.get("/getpakistaniplayer", GetPakistaniPlayer)

export default router;