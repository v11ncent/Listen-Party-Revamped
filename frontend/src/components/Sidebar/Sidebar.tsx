import LobbyForm from "./Lobby Form/LobbyForm";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h2>Create a lobby</h2>
      <LobbyForm />
    </aside>
  );
};

export default Sidebar;
