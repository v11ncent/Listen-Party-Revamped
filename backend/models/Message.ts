import { Schema, model } from "mongoose";
import { TMessage } from "../../types/global/index";

const messageSchema = new Schema<TMessage>({
  id: String,
  username: { type: String, required: true },
  timestamp: { type: Date, required: true },
  data: { type: String, required: true },
});

const MessageModel = model<TMessage>("Message", messageSchema);

export { MessageModel };
