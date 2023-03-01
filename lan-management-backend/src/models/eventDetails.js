import mongoose from "mongoose";

const ParticipantSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gamerTag: String,
  seatNumber: Number,
});

export const Participant = mongoose.model("Participant", participantSchema);
