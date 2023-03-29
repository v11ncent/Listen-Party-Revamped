import { useState, useEffect, useRef } from "react";
import { TLobby } from "../../../../../../types/global";
import { TMessage } from "../../../../../../types/client";
import Header from "./Header/Header";
import Message from "./Message/Message";
import MessageForm from "./Message Form/MessageForm";
import styles from "./Chat.module.scss";

const Chat = ({ lobbyInfo }: { lobbyInfo: TLobby }) => {
  const [messages, setMessages] = useState<TMessage[]>([]);
  const socketRef = useRef(null);

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <section className={styles.chat}>
      <Header lobbyInfo={lobbyInfo} />
      <ol className={styles.list}>
        {messages &&
          messages.map((message: TMessage) => (
            <Message key={message.id} message={message} />
          ))}
      </ol>
      {/* lobbyId is needed to find lobby in database*/}
      {lobbyInfo?.id && (
        <MessageForm lobbyId={lobbyInfo.id} setMessages={setMessages} />
      )}
    </section>
  );
};

export default Chat;
