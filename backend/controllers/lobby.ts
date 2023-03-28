import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { LobbyModel } from "../models/Lobby";
import { TLobby, TMessage } from "../../types/global";

dotenv.config();

const getLobby = async (req: Request, res: Response, next: NextFunction) => {
  const id: string = req.params.lobbyId;
  const foundLobby = LobbyModel.findById(id);

  res.status(200).json({
    status: 200,
    message: `Successfully found a lobby with id of ${id}.`,
    data: foundLobby,
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
    const newLobby = new LobbyModel<TLobby>({
      name: name,
      messages: [
        { username: "vince1444", timestamp: new Date(), data: "Hello, world!" },
      ],
    });

    await newLobby.save();

    res.status(200).json({
      status: 200,
      message: "Lobby successfully created.",
      data: newLobby,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Server error on lobby creation. Please try again.",
    });
  }
};

const createMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const username: string = req.body?.username;
  const timestamp: Date = req.body?.timestamp;
  const data: string = req.body?.data;

  if (!username || !timestamp || !data) {
    res.status(400).json({
      status: 400,
      message: "Missing parameters in request body.",
    });
  }

  const newMessage: TMessage = {
    id: null,
    username: req.body?.username,
    timestamp: req.body?.timestamp,
    data: req.body?.data,
  };

  try {
    // logic to add message to lobby in MongoDb
    res.status(200).json({
      status: 200,
      message: "Message successfully added to lobby.",
      data: newMessage,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Server error on message creation. Please try again.",
    });
  }
};

export { getLobby, createLobby, createMessage };
