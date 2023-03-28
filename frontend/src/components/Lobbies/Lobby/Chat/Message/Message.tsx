import { TMessage } from "../../../../../../../types/client";
import styles from "./Message.module.scss";

const Message = ({ message }: { message: TMessage }) => {
  return (
    <li className={styles.message}>
      <p>
        <span className={styles.username}>{message.username}</span> (
        <span className={styles.timestamp}>
          {message.timestamp.toLocaleDateString()})
        </span>
        : {message.message}
      </p>
    </li>
  );
};

export default Message;
