import { Schema, model } from "mongoose";
import { TMessage } from "../../types/global";

const messageSchema = new Schema<TMessage>({
  username: { type: String, required: true },
  timestamp: { type: Date, required: true },
  message: { type: String, required: true },
});

const MessageModel = model<TMessage>("Message", messageSchema);

export { messageSchema, MessageModel };
