import { SyntheticEvent, useState } from "react";
import axios from "axios";
import Button from "../../Button/Button";
import { TLobby } from "../../../../../types/global/index";
import styles from "./LobbyForm.module.scss";

const LobbyForm = ({ addLobby }: { addLobby: Function }) => {
  const [lobbyName, setLobbyName] = useState<string>("");

  // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setLobbyName(event.currentTarget.value);
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const createLobbyUri: string = import.meta.env.VITE_API_CREATE_LOBBY;
    const newLobby: TLobby = {
      name: lobbyName,
    };

    const response = await axios.post(createLobbyUri, newLobby); // post lobby to database
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
