import express, { Router } from "express";
import { getLobby, createLobby, createMessage } from "../controllers/lobby";

const lobbyRouter: Router = express.Router();

lobbyRouter.get("/lobby/:id", getLobby);
lobbyRouter.post("/lobby", createLobby);
lobbyRouter.post("/lobby/message", createMessage);
lobbyRouter.put("/lobby");
lobbyRouter.delete("/lobby");

export { lobbyRouter };
