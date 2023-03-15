import { Schema, model } from "mongoose";

type Lobby = {
  name: string;
};

const lobbySchema = new Schema<Lobby>({
  name: { type: String, required: true },
});

const Lobby = model<Lobby>("Lobby", lobbySchema);

export { Lobby as LobbyModel };
