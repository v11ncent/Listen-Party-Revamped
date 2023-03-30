import { useState, useEffect } from "react";
import axios from "axios";
import { TMessage } from "../../../../../../../types/global";
import styles from "./MessageForm.module.scss";

const CREATE_MESSAGE_URI: string = import.meta.env.VITE_API_CREATE_MESSAGE;

const MessageForm = ({
  lobbyId,
  setMessages,
}: {
  lobbyId: string;
  setMessages: Function;
}) => {
  const [message, setMessage] = useState("");

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setMessage(event.currentTarget.value);
  };

  const handleSubmit = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ): Promise<void> => {
    if (event.key !== "Enter") return;

    event.preventDefault();

    const newMessage: TMessage = {
      id: null,
      lobbyId: lobbyId,
      username: "Anonymous", // temporary
      timestamp: new Date(),
      message: message,
    };

    const response = await axios.post(CREATE_MESSAGE_URI, newMessage);
    newMessage.id = response.data.message._id;
    setMessages((array: TMessage[]) => [...array, newMessage]); // messages state from Chat.tsx
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
