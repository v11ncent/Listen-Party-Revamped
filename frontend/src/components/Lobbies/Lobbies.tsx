import { useState } from "react";

type Lobbies = {
  id: number;
  name: string;
}[];

const Lobbies = ({ lobbies }: { lobbies: Lobbies }) => {
  const [lobbiesArray, setLobbiesArray] = useState([]);
  return <h2>Lobbies</h2>;
};

export default Lobbies;
