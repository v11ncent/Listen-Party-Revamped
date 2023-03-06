import { SyntheticEvent, useState } from "react";
import Button from "../../Button/Button";
import styles from "./LobbyForm.module.scss";

const LobbyForm = ({ addLobby }: { addLobby: Function }) => {
  const [name, setName] = useState("");

  // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    addLobby({ id: 10, name: "Lobby Test" });
    // make a call to the api once I get it set up
    setName("");
  };

  return (
    <form className={styles.form}>
      <input
        type="text"
        name="lobbyName"
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
