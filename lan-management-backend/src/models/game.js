import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  gameId: {
    type: Number,
    unique: true,
    required: true,
    validate: {
      validator: function (v) {
        return v !== 0;
      },
      message: (props) =>
        `${props.value} is not a valid gameId. gameId should be a non-zero number.`,
    },
  },
  name: String,
  minPlayers: Number,
  maxPlayers: Number,
  priceMoney: Number,
});

export const Game = mongoose.model("Game", gameSchema);
