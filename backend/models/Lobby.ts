import { Schema, model } from "mongoose";
import { messageSchema } from "./Message";
import { TLobby } from "../../types/global/index";

const lobbySchema = new Schema<TLobby>({
  id: String,
  name: { type: String, required: true },
  messages: [messageSchema],
});

const LobbyModel = model<TLobby>("Lobby", lobbySchema);

export { LobbyModel };
