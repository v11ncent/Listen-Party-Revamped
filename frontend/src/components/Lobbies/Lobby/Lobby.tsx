import { useState, useEffect, useRef } from "react";
import { TMessage } from "../../../../../types/client/index";

const Lobby = () => {
  const [messages, setMessages] = useState<TMessage[]>([]);

  useEffect(() => {
    setMessages([
      { username: "vince144", timestamp: new Date(), message: "Hello, world!" },
    ]);
  }, []);

  return <h1>I'm a lobby!</h1>;
};

export default Lobby;
