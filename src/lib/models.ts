import mongoose, { Schema, model, models } from "mongoose";

const WebhookSchema = new Schema(
  {
    payload: { type: Schema.Types.Mixed, required: true },
    receivedAt: { type: Date, default: Date.now },
  },
  { strict: false }
);

export const WebhookData =
  models.WebhookData || model("WebhookData", WebhookSchema);
