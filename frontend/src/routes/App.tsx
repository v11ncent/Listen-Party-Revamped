import Lobbies from "../components/Lobbies/Lobbies";
import Sidebar from "../components/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Lobbies lobbies={[{ id: 1, name: "Lobby 1" }]} />
      <Sidebar />
    </>
  );
};

export default App;
