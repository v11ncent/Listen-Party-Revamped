import { Schema, model } from "mongoose";
import type { Lobby } from "../../types/global/index";

const lobbySchema = new Schema<Lobby>({
  name: { type: String, required: true },
});

const LobbyModel = model<Lobby>("Lobby", lobbySchema);

export { LobbyModel };
