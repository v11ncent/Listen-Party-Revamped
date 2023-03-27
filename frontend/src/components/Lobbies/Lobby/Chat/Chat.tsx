import { useState, useEffect, useRef } from "react";
import { TMessage } from "../../../../../../types/client";
import styles from "./Chat.module.scss";

const Chat = () => {
  const [messages, setMessages] = useState<TMessage[] | null>(null);

  useEffect(() => {
    setMessages([
      {
        id: "1",
        username: "vince144",
        timestamp: new Date(),
        message: "Hello, world!",
      },
    ]);
  }, []);

  return (
    <section>
      <ul>
        {messages &&
          messages.map((message) => (
            <li key={message.id}>
              <p>
                {message.username} ({message.timestamp.toLocaleDateString()}):{" "}
                {message.message}
              </p>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Chat;
