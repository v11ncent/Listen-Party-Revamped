import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { LobbyModel } from "../models/Lobby";
import { MessageModel } from "../models/Message";
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

  if (!name) {
    res.status(400).json({
      status: 400,
      message: "Lobby name is missing from request body.",
    });

    return;
  }

  try {
    const newLobby = new LobbyModel<TLobby>({
      name: name,
      messages: [
        {
          username: "vince1444",
          timestamp: new Date(),
          message: "Hello, world!",
        },
      ],
    });

    await newLobby.save();

    res.status(200).json({
      status: 200,
      statusMessage: "Lobby successfully created.",
      lobby: newLobby,
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
  const lobbyId: string = req.body?.lobbyId;
  const username: string = req.body?.username;
  const timestamp: Date = req.body?.timestamp;
  const message: string = req.body?.message;

  if (!username || !timestamp || !message) {
    res.status(400).json({
      status: 400,
      message: "Missing parameters in request body.",
    });

    return;
  }

  const newMessage = new MessageModel<TMessage>({
    username: username,
    timestamp: timestamp,
    message: message,
  });

  // refactor try..catch block

  try {
    const foundLobby = await LobbyModel.findById(lobbyId);

    if (!foundLobby || !foundLobby.messages) {
      throw new Error();
    }

    foundLobby.messages.push(newMessage);
    await foundLobby.save();

    res.status(200).json({
      status: 200,
      statusMessage: "Message successfully added to lobby.",
      message: newMessage,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Server error on message creation. Please try again.",
    });
  }
};

export { getLobby, createLobby, createMessage };
