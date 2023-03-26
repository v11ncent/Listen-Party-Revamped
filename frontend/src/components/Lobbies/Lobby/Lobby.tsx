import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { TMessage } from "../../../../../types/client/index";
import { TLobby } from "../../../../../types/global";
import styles from "./Lobby.module.scss";

const Lobby = () => {
  const [messages, setMessages] = useState<TMessage[] | null>(null);
  const [lobbyInfo, setLobbyInfo] = useState<TLobby | null>(null);
  const location = useLocation();
  const lobby = location.state?.lobby;

  useEffect(() => {
    setMessages([
      {
        id: "1",
        username: "vince144",
        timestamp: new Date(),
        message: "Hello, world!",
      },
    ]);

    setLobbyInfo(lobby);
  }, []);

  return (
    <main className={styles.lobby}>
      <h1>{lobbyInfo ? `Lobby: ${lobbyInfo.name}` : "Welcome to the lobby"}</h1>
      {lobbyInfo?.id && <i>id: {lobbyInfo.id}</i>}
      <section>
        <ul>
          {messages &&
            messages.map((message) => (
              <li key={message.id}>
                <p>
                  {message.username} ({message.timestamp.toLocaleDateString()}):{" "}
                  {message.message}
                </p>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
};

export default Lobby;
