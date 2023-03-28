import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  eventId: {
    type: Number,
    unique: true,
    required: true,
    validate: {
      validator: function (v) {
        return v !== 0;
      },
      message: (props) =>
        `${props.value} is not a valid eventId. eventId should be a non-zero number.`,
    },
  },
  name: String,
  participants: Number,
  location: String,
  startDate: String,
  endDate: String,
  entry: String,
  start: String,
  end: String,
});

export const Event = mongoose.model("Event", eventSchema);
