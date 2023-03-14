import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { LobbyModel } from "../models/Lobby";

dotenv.config();

type Lobby = {
  id: string;
  name: string;
};

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
  const id: String = req.params?.id;
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

  const newLobby = new LobbyModel({ id: id, name: name });
  newLobby.save();

  res.status(200).json({
    status: 200,
    message: "Lobby has been created successfully.",
    lobbyId: id,
  });
};

export { getLobby, createLobby };
