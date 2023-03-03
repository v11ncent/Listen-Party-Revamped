import { SyntheticEvent, useState } from "react";
import axios from "axios";
import Button from "../../Button/Button";
import styles from "./LobbyForm.module.scss";

type LobbyCreationResponse = {
  status: number;
  message: string;
  lobbyId: string;
};

const LobbyForm = () => {
  const [name, setName] = useState("");

  // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    // Implement the following:
    // https://bobbyhadz.com/blog/typescript-http-request-axios
    const response = await axios.post<LobbyCreationResponse>(
      `${import.meta.env.VITE_API_SERVER_URL}/lobby`,
      {
        lobbyName: name,
      }
    );

    console.log(response);
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
