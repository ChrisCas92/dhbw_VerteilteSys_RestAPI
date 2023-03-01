import { check, validationResult } from "express-validator";
import { Game } from "../models/game.js";

/*[
  {
    id: 0,
    name: "Counter Strike: Global Offensive",
    minPlayers: 10,
    maxPlayers: 50,
    priceMoney: 500,
  },
  {
    id: 1,
    name: "League of Legends",
    minPlayers: 25,
    maxPlayers: 75,
    priceMoney: 1500,
  },
  {
    id: 2,
    name: "Rocket League",
    minPlayers: 12,
    maxPlayers: 48,
    priceMoney: 850,
  },
  {
    id: 3,
    name: "Call of Duty: Warzone",
    minPlayers: 60,
    maxPlayers: 160,
    priceMoney: 5000,
  },
];*/

export const getGames = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  const games = await Game.find();
  res.status(200).send(games);
};

export const getGamesById = async (req, res) => {
  let game = await Game.findById(req.params.id);
  res.status(200).send(game);
};

export const getGamesByName = async (req, res) => {
  let gameName = await Game.find({ name: req.params.name });
  res.status(200).send(gameName);
};

export const addGame = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const game = new Game({
    name: req.body.name,
    minPlayers: req.body.minPlayers,
    maxPlayers: req.body.maxPlayers,
    priceMoney: req.body.priceMoney,
  });

  game.save(game).then((game) => res.status(201).send(game));
};

// attached as second param in a route
export const newGameValidators = [
  check("name").notEmpty().withMessage("Name of the Game is required"),
  check("minPlayers")
    .notEmpty()
    .withMessage("Number of the minimum players required is required"),
  check("maxPlayers")
    .notEmpty()
    .withMessage("Number of the maximum players required is required"),
];
