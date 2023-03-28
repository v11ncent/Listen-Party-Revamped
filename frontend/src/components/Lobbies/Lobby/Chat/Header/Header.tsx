import { TLobby } from "../../../../../../../types/global/Lobby";

const Header = ({ lobbyInfo }: { lobbyInfo: TLobby }) => {
  return (
    <header>
      {lobbyInfo ? (
        <>
          <h1>{lobbyInfo.name}</h1>
          <i>id: {lobbyInfo.id}</i>
        </>
      ) : (
        <h1>Welcome to the lobby!</h1>
      )}
    </header>
  );
};

export default Header;
