import { useState, useEffect, useRef } from "react";
import { TLobby } from "../../../../../../types/global";
import { TMessage } from "../../../../../../types/client";
import Header from "./Header/Header";
import Message from "./Message/Message";
import MessageForm from "./Message Form/MessageForm";
import styles from "./Chat.module.scss";

const Chat = ({ lobbyInfo }: { lobbyInfo: TLobby }) => {
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
    <>
      <aside className={styles.chat}>
        <Header lobbyInfo={lobbyInfo} />
        <ol className={styles.list}>
          {messages &&
            messages.map((message: TMessage) => (
              <Message key={message.id} message={message} />
            ))}
        </ol>
        <MessageForm />
      </aside>
    </>
  );
};

export default Chat;
