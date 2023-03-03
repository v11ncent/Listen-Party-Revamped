import { SyntheticEvent, useState } from "react";
import axios from "axios";
import Button from "../../Button/Button";
import styles from "./LobbyForm.module.scss";

const LobbyForm = () => {
  const [nameInput, setNameInput] = useState("");

  // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setNameInput(event.currentTarget.value);
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    // Implement the following:
    // https://bobbyhadz.com/blog/typescript-http-request-axios
    const response = await axios.post("localhost:8080/lobby");
    console.log(response);
  };

  return (
    <form className={styles.form}>
      <input
        type="text"
        name="name"
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
