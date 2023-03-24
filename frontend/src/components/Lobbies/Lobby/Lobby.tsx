import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { TMessage } from "../../../../../types/client/index";
import { TLobby } from "../../../../../types/global";

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
    <main>
      <h1>Lobby!</h1>
      <section>
        <h2>
          {lobbyInfo
            ? `Lobby #${lobbyInfo.id} : ${lobbyInfo.name}`
            : "Welcome to the lobby"}
        </h2>
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
