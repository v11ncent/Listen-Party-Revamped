import { useState, useEffect } from "react";
import { TLobbies } from "../../../../types/client/index";

const Lobbies = ({ lobbies }: { lobbies: TLobbies }) => {
  const [lobbiesArray, setLobbiesArray] = useState([] as TLobbies);

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
