import { SyntheticEvent, useState } from "react";
import Button from "../../Button/Button";
import styles from "./LobbyForm.module.scss";

const LobbyForm = () => {
  const [nameInput, setNameInput] = useState("");

  // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setNameInput(event.currentTarget.value);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form}>
      <input
        type="text"
        name="lobbyName"
        placeholder={"Lobby name"}
        value={nameInput}
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
