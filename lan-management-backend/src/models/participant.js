import mongoose from "mongoose";

const participantSchema = new mongoose.Schema({
  participantId: {
    type: Number,
    unique: true,
    required: true,
    validate: {
      validator: function (v) {
        return v !== 0;
      },
      message: (props) =>
        `${props.value} is not a valid participantId. participantId should be a non-zero number.`,
    },
  },
  firstName: String,
  lastName: String,
  gamerTag: String,
  seatNumber: Number,
});

export const Participant = mongoose.model("Participant", participantSchema);
