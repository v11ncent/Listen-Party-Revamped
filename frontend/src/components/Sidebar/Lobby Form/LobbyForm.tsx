import { SyntheticEvent, useState } from "react";
import axios from "axios";
import Button from "../../Button/Button";
import type { Lobby } from "../../../../../types/global/index";
import styles from "./LobbyForm.module.scss";

const createLobbyUri: string = import.meta.env.VITE_API_CREATE_LOBBY;

const LobbyForm = ({ addLobby }: { addLobby: Function }) => {
  const [lobbyName, setLobbyName] = useState<string>("");

  // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setLobbyName(event.currentTarget.value);
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    const newLobby: Lobby = {
      name: lobbyName,
    };

    event.preventDefault();
    // post lobby to database
    const response = await axios.post<string, Lobby>(createLobbyUri, newLobby);
    newLobby.id = response.data.lobby._id;
    // add lobby to Lobbies state in presentation layer
    console.log(newLobby);
    addLobby(newLobby);
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
