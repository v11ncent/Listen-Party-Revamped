import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { TLobby } from "../../../../../types/global";
import Chat from "./Chat/Chat";
import styles from "./Lobby.module.scss";

const Lobby = () => {
  const [lobbyInfo, setLobbyInfo] = useState<TLobby>(null);
  const location = useLocation();
  const lobby = location.state?.lobby;

  useEffect(() => {
    setLobbyInfo(lobby);
  }, [lobby]);

  return (
    <main className={styles.lobby}>
      <Chat lobbyInfo={lobbyInfo} />
    </main>
  );
};

export default Lobby;
