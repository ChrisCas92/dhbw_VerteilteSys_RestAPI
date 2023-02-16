import express from "express";
import {
  findGames,
  findGamesById,
  getGames,
  addGame,
  newGameValidators,
} from "./gamesControllers.js";

const router = express.Router();

router.get("/", getGames);
router.get("/search", findGames);
router.get("/:id", findGamesById);
router.post("/add", newGameValidators, addGame);

export default router;
