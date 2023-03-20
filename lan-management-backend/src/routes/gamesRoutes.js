import express from "express";
import {
  getGames,
  getGamesById,
  getGamesByName,
  addGame,
  patchGame,
  patchGameValidator,
  newGameValidators,
} from "../controllers/gamesControllers.js";

const router = express.Router();

router.get("/", getGames);
router.get("/search", getGamesByName);
router.get("/:id", getGamesById);
router.post("/add", newGameValidators, addGame);
router.patch("/patch", patchGameValidator, patchGame);

export default router;
