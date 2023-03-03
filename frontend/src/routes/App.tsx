import Lobbies from "../components/Lobbies/Lobbies";
import Sidebar from "../components/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Sidebar />
      <Lobbies
        lobbies={[
          { id: 1, name: "Lobby 1" },
          { id: 2, name: "Lobby 2" },
          { id: 3, name: "Lobby 3" },
        ]}
      />
    </>
  );
};

export default App;
