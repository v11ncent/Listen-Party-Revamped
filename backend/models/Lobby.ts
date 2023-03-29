import { Schema, model } from "mongoose";
import { TLobby, TMessage } from "../../types/global/index";

const messageSchema = new Schema<TMessage>({
  username: { type: String, required: true },
  timestamp: { type: Date, required: true },
  message: { type: String, required: true },
});

const lobbySchema = new Schema<TLobby>({
  id: String,
  name: { type: String, required: true },
  messages: [messageSchema],
});

const LobbyModel = model<TLobby>("Lobby", lobbySchema);

export { LobbyModel };
