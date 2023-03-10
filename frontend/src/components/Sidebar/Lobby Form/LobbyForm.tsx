import { SyntheticEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Button from "../../Button/Button";
import styles from "./LobbyForm.module.scss";

const createLobbyUri = import.meta.env.VITE_API_CREATE_LOBBY;

const LobbyForm = ({ addLobby }: { addLobby: Function }) => {
  const [lobbyName, setLobbyName] = useState("");

  // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setLobbyName(event.currentTarget.value);
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    const newLobby = {
      id: uuidv4(),
      name: lobbyName,
    };

    event.preventDefault();
    addLobby(newLobby); // add lobby to Lobbies state in presentation layer
    await axios.post(createLobbyUri, newLobby); // post lobby to database
    setLobbyName("");
  };

  return (
    <form className={styles.form}>
      <input
        type="text"
        name="name"
        placeholder={"Lobby name"}
        value={lobbyName}
        onChange={handleChange}
      />
      <Button
        as="button"
        text={"Create a lobby"}
        primary={false}
        onClick={handleSubmit}
        type="submit"
      />
    </form>
  );
};

export default LobbyForm;
