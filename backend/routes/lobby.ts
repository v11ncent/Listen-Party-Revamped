import express, { Router } from "express";
import { getLobby, createLobby } from "../controllers/lobby";

const lobbyRouter: Router = express.Router();

lobbyRouter.get("/lobby", getLobby);
lobbyRouter.post("/lobby", createLobby);
lobbyRouter.put("/lobby");
lobbyRouter.delete("/lobby");

export { lobbyRouter };
