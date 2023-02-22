import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: String,
  participants: Number,
  location: String,
  startDate: Date,
  endDate: Date,
  entry: String,
  start: String,
  end: String,
});

export const Event = mongoose.model("Event", eventSchema);
