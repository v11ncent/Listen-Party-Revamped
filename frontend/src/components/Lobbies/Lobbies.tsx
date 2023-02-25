type Lobbies = {
  id: BigInteger;
  name: string;
  link: string;
}[];

const Lobbies = ({ lobbies }: { lobbies: Lobbies }) => {
  return <h2>Lobbies</h2>;
};

export default Lobbies;
