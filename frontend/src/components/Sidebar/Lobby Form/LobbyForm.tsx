import { SyntheticEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Button from "../../Button/Button";
import styles from "./LobbyForm.module.scss";

const LobbyForm = ({ addLobby }: { addLobby: Function }) => {
  const [name, setName] = useState("");

  // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const uuid = uuidv4();
    addLobby({ id: uuid, name: name });
    // make a call to the api once I get it set up
    setName("");
  };

  return (
    <form className={styles.form}>
      <input
        type="text"
        name="name"
        placeholder={"Lobby name"}
        value={name}
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
