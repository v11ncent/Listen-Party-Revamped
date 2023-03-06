import LobbyForm from "./Lobby Form/LobbyForm";
import styles from "./Sidebar.module.scss";

const Sidebar = ({ addLobby }: { addLobby: Function }) => {
  return (
    <aside className={styles.sidebar}>
      <h2>Create a lobby</h2>
      <LobbyForm addLobby={addLobby} />
    </aside>
  );
};

export default Sidebar;
