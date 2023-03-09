import { Schema, model } from "mongoose";

type tLobby = {
  id: string;
  name: string;
};

const lobbySchema = new Schema<tLobby>({
  id: { type: String, required: true },
  name: { type: String, required: true },
});

const Lobby = model<tLobby>("Lobby", lobbySchema);

module.exports = { LobbyModel: Lobby };
