import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./MessageForm.module.scss";

const CREATE_MESSAGE_URI: string = import.meta.env.VITE_API_CREATE_MESSAGE;

const MessageForm = ({ lobbyId }: { lobbyId: string }) => {
  const [message, setMessage] = useState("");

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setMessage(event.currentTarget.value);
  };

  const handleSubmit = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ): Promise<void> => {
    if (event.key !== "Enter") return;

    event.preventDefault();

    const newMessage = {
      lobbyId: lobbyId,
      username: "vince1444", // temporary
      timestamp: new Date(),
      data: message, // temporary
    };

    const response = await axios.post(CREATE_MESSAGE_URI, newMessage);
    console.log(response);
    setMessage("");
  };

  return (
    <form action="/test" method="POST" className={styles.form}>
      <div>
        <label htmlFor="message" className={"sr-only"}>
          Enter a message to send to the lobby!
        </label>
        <input
          type="text"
          name="message"
          placeholder={"Type a message to the lobby"}
          value={message}
          onChange={handleChange}
          onKeyDown={handleSubmit}
          className={styles.input}
        ></input>
      </div>
    </form>
  );
};

export default MessageForm;
