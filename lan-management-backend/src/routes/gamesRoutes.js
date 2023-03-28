import express from "express";
import {
  getGames,
  getGamesById,
  getGamesByName,
  addGame,
  patchGame,
  deleteGameById,
  deleteAllGames,
  patchGameValidator,
  newGameValidators,
} from "../controllers/gamesControllers.js";

const router = express.Router();

router.get("/", getGames);
router.get("/search", getGamesByName);
router.get("/gameid", getGamesById);
router.post("/add", newGameValidators, addGame);
router.patch("/patch", patchGameValidator, patchGame);
router.delete("/deleteGameById", patchGameValidator, deleteGameById);
router.delete("/deleteAllGames", deleteAllGames);

export default router;
