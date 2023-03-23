import { useState, useEffect } from "react";
import { TLobbies } from "../../../../types/client/index";
import { Link } from "react-router-dom";

const Lobbies = ({ lobbies }: { lobbies: TLobbies }) => {
  const [lobbiesArray, setLobbiesArray] = useState([] as TLobbies);

  useEffect(() => {
    setLobbiesArray(lobbies);
  }, [[], lobbies]);

  return (
    <ul>
      {lobbiesArray &&
        lobbiesArray.map((lobby) => (
          <li key={lobby.id}>
            <Link to={`/lobby/${lobby.id}`}>{lobby.name}</Link>
          </li>
        ))}
    </ul>
  );
};

export default Lobbies;
