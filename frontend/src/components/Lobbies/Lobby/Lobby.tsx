import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { TMessage } from "../../../../../types/client/index";
import { TLobby } from "../../../../../types/global";
import Chat from "./Chat/Chat";
import styles from "./Lobby.module.scss";

const Lobby = () => {
  const [lobbyInfo, setLobbyInfo] = useState<TLobby | null>(null);
  const location = useLocation();
  const lobby = location.state?.lobby;

  useEffect(() => {
    setLobbyInfo(lobby);
  }, []);

  return (
    <main className={styles.lobby}>
      <h1>{lobbyInfo ? `Lobby: ${lobbyInfo.name}` : "Welcome to the lobby"}</h1>
      {lobbyInfo?.id && <i>id: {lobbyInfo.id}</i>}
      <Chat />
    </main>
  );
};

export default Lobby;
