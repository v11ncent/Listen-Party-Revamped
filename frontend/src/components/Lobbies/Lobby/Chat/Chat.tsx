import { useState, useEffect, useRef } from "react";
import { TMessage } from "../../../../../../types/client";
import Message from "./Message/Message";
import styles from "./Chat.module.scss";

const Chat = () => {
  const [messages, setMessages] = useState<TMessage[] | null>(null);
  const socketRef = useRef(null);

  useEffect(() => {
    setMessages([
      {
        id: "1",
        username: "vince144",
        timestamp: new Date(),
        message: "Hello, world!",
      },
      {
        id: "2",
        username: "vince144",
        timestamp: new Date(),
        message: "Hello, world!",
      },
    ]);
  }, []);

  return (
    <section>
      <ol>
        {messages &&
          messages.map((message: TMessage) => (
            <Message key={message.id} message={message} />
          ))}
      </ol>
    </section>
  );
};

export default Chat;
