import { TMessage } from "./index";

export type TLobby = {
  id?: string;
  name: string;
  messages?: TMessage[];
} | null; // since useLocation() is asynchronous, assign null to state until object is fetched
