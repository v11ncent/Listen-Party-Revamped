import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./MessageForm.module.scss";

const MessageForm = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setMessage(event.currentTarget.value);
  };

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key !== "Enter") return;

    event.preventDefault();
    console.log("enter key pressed");
  };

  useEffect(() => {
    console.log(message);
  }, [message]);

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
