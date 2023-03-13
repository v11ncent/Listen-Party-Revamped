import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { LobbyModel } from "../models/Lobby";

dotenv.config();

const getLobby = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: 200,
    message: "Successfully made GET request to /lobby endpoint.",
  });
};

const createLobby = (req: Request, res: Response, next: NextFunction) => {
  const id: String = req.body?.id;
  const name: String = req.body?.name;

  if (!name)
    res.status(400).json({
      status: 400,
      message: "Lobby name is missing from request body.",
    });

  if (!id) {
    res.status(400).json({
      status: 400,
      message: "Lobby id is missing from request body.",
    });
  }

  res.status(200).json({
    status: 200,
    message: "Lobby has been created successfully.",
    lobbyId: id,
  });
};

export { getLobby, createLobby };
