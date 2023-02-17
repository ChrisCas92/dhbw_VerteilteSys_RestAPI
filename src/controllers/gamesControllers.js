import { check, validationResult } from "express-validator";

const games = [
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
];

export const getGames = (req, res) => {
  res.status(200).send(games);
};

export const findGames = (req, res) => {
  let result = games.filter((game) => game.name == req.query.name);
  res.status(200).send(result);
};

export const findGamesById = (req, res) => {
  let game = games.find((g) => g.id == req.params.id);
  res.status(200).send(game);
};

export const addGame = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const game = req.body;
  games.push(game);
  res.status(201).send(`Added ${game.name} to event collection`);
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
