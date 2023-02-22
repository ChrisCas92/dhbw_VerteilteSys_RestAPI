import express from "express";
import {
  getGames,
  getGamesById,
  getGamesByName,
  addGame,
  newGameValidators,
} from "../controllers/gamesControllers.js";

const router = express.Router();

router.get("/", getGames);
router.get("/search", getGamesByName);
router.get("/:id", getGamesById);
router.post("/add", newGameValidators, addGame);

export default router;
