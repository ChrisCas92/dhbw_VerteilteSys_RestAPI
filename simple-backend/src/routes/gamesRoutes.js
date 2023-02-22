import express from "express";
import {
  findGames,
  findGamesById,
  getGames,
  addGame,
  newGameValidators,
} from "../controllers/gamesControllers.js";

const router = express.Router();

router.get("/", getGames);
router.get("/search", findGames);
router.post("/add", newGameValidators, addGame);
router.get("/:id", findGamesById);

export default router;
