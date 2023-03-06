import express, { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";

const getLobby = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: 200,
    message: "Successfully made GET request to /lobby endpoint.",
  });
};

const createLobby = (req: Request, res: Response, next: NextFunction) => {
  const id = uuidv4();
  const name: String = req.body?.lobbyName;

  if (!name)
    res.status(400).json({
      status: 400,
      message: "Lobby name is missing from request body.",
    });

  res.status(200).json({
    status: 200,
    message: "Lobby has been created successfully.",
    lobbyId: id,
  });
};

export { getLobby, createLobby };
