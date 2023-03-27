import { TMessage } from "../../../../../../../types/client";
import styles from "./Message.module.scss";

const Message = ({ message }: { message: TMessage }) => {
  return (
    <li key={message.id}>
      <p>
        {message.username} ({message.timestamp.toLocaleDateString()}):{" "}
        {message.message}
      </p>
    </li>
  );
};

export default Message;
