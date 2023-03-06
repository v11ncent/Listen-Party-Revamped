import { useState } from "react";
import Lobbies from "../components/Lobbies/Lobbies";
import Sidebar from "../components/Sidebar/Sidebar";

type Lobby = {
  id: number;
  name: string;
};

const App = () => {
  const [lobbies, setLobbies] = useState([
    { id: 1, name: "Lobby 1" },
    { id: 2, name: "Lobby 2" },
    { id: 3, name: "Lobby 3" },
  ]);

  const addLobby = (lobby: Lobby) => {
    setLobbies((lobbies) => [...lobbies, lobby]);
  };

  return (
    <>
      <Sidebar addLobby={addLobby} />
      <main>
        <Lobbies lobbies={lobbies} />
      </main>
    </>
  );
};

export default App;
