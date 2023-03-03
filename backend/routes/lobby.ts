import express, { Router } from "express";
import { getLobby, createLobby } from "../controllers/lobby";

const router: Router = express.Router();

router.get("/lobby", getLobby);
router.post("/lobby", createLobby);
router.put("/lobby");
router.delete("/lobby");

export { router };
