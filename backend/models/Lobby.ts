import { Schema, model } from "mongoose";

type Lobby = {
  id: string;
  name: string;
};

const lobbySchema = new Schema<Lobby>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
});

const Lobby = model<Lobby>("Lobby", lobbySchema);

export { Lobby as LobbyModel };
