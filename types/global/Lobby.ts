import { TMessage } from "./index";

export type TLobby = {
  id?: string;
  name: string;
  messages?: TMessage[];
};
