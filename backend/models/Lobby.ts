import { Schema, model } from "mongoose";
import { TLobby } from "../../types/global/index";

const lobbySchema = new Schema<TLobby>({
  name: { type: String, required: true },
});

const LobbyModel = model<TLobby>("Lobby", lobbySchema);

export { LobbyModel };
