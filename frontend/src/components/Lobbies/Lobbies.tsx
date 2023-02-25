type Lobbies = {
  id: number;
  name: string;
}[];

const Lobbies = ({ lobbies }: { lobbies: Lobbies }) => {
  return <h2>Lobbies</h2>;
};

export default Lobbies;
