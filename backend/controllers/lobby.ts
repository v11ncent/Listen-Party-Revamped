import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { LobbyModel } from "../models/Lobby";

dotenv.config();

const getLobby = async (req: Request, res: Response, next: NextFunction) => {
  const id: string = req.params.lobbyId;
  const foundLobby = LobbyModel.findById(id);

  res.status(200).json({
    status: 200,
    message: `Successfully found a lobby with id of ${id}.`,
    lobby: foundLobby,
  });
};

const createLobby = async (req: Request, res: Response, next: NextFunction) => {
  const name: string = req.body?.name;

  if (!name)
    res.status(400).json({
      status: 400,
      message: "Lobby name is missing from request body.",
    });

  try {
    const newLobby = new LobbyModel({ name: name });
    newLobby.save();

    res.status(200).json({
      status: 200,
      message: "Lobby has been created successfully.",
      lobby: newLobby,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Server error. Please try again.",
    });
  }
};

export { getLobby, createLobby };
