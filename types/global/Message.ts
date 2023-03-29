export type TMessage = {
  id?: string | null;
  lobbyId?: string;
  username: string;
  timestamp: Date;
  message: string;
};
