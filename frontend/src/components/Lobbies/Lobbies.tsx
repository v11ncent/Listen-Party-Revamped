import { useState, useEffect } from "react";
import { Lobbies } from "../../../../types/client/index";

const Lobbies = ({ lobbies }: { lobbies: Lobbies }) => {
  const [lobbiesArray, setLobbiesArray] = useState([] as Lobbies);

  useEffect(() => {
    setLobbiesArray(lobbies);
  }, [[], lobbies]);
  return (
    <ul>
      {lobbiesArray &&
        lobbiesArray.map((lobby) => <li key={lobby.id}>{lobby.name}</li>)}
    </ul>
  );
};

export default Lobbies;
