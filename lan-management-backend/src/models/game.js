import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  name: String,
  minPlayers: Number,
  maxPlayers: Number,
  priceMoney: Number,
});

export const Game = mongoose.model("Game", gameSchema);
