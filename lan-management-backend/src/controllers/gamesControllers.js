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
  let gameid = req.query.gameId;
  let game = await Game.findOne({ gameId: gameid });
  if (!game) {
    res.status(404).send("Game not found");
  } else {
    res.status(200).send(game);
  }
};

export const getGamesByName = async (req, res) => {
  let gameName = await Game.find({ name: req.query.name });
  res.status(200).send(gameName);
};

export const addGame = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  await checkDuplicateGameId(req, res, async () => {
    const game = new Game({
      gameId: req.body.gameId,
      name: req.body.name,
      minPlayers: req.body.minPlayers,
      maxPlayers: req.body.maxPlayers,
      priceMoney: req.body.priceMoney,
    });

    game.save(game).then((game) => res.status(201).send(game));
  });
};

export const patchGame = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    let result = await Game.find({ gameId: req.query.gameId });
    if (result.length === 0) {
      res.status(404).send("GameID not found or invalid");
    } else {
      let response = await Game.findOneAndUpdate(
        { gameId: req.query.gameId },
        {
          $set: {
            name: req.query.name,
            minPlayers: req.query.minPlayers,
            maxPlayers: req.query.maxPlayers,
            priceMoney: req.query.priceMoney,
          },
        },
        { new: true }
      );
      res.status(200).send(response);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating game");
  }
};

export const deleteGameById = async (req, res) => {
  try {
    let result = await Game.find({ gameId: req.query.gameId });
    if (result.length === 0) {
      res.status(404).send("GameID not found or invalid");
    } else {
      let response = await Game.findOneAndDelete({ gameId: req.query.gameId });
      res.status(200).send(response);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting game");
  }
};

export const deleteAllGames = async (req, res) => {
  try {
    let response = await Game.deleteMany({});
    res.status(200).send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting all games");
  }
};

//Method to check if game ID already exists in the database
export const checkDuplicateGameId = async (req, res, next) => {
  try {
    const gameId = req.body.gameId;
    const game = await Game.findOne({ gameId });
    if (game) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Game ID already exists" }] });
    }
    next();
  } catch (err) {
    console.error(err);
    res.status(500).send("gameId check failed");
  }
};

// attached as third param in a route for the patch method
export const patchGameValidator = [
  check("gameId")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("Game ID is required"),
  check("name")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("Name of the Game is required"),
  check("minPlayers")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("Number of the minimum players required is required"),
  check("maxPlayers")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("Number of the maximum players required is required"),
];

// attached as second param in a route
export const newGameValidators = [
  check("gameId")
    .notEmpty()
    .withMessage("Game ID is required")
    .isInt({ min: 1, max: 1000 })
    .withMessage("Game ID must be between 1 and 1000"),
  check("name").notEmpty().withMessage("Name of the Game is required"),
  check("minPlayers")
    .notEmpty()
    .withMessage("Number of the minimum players required is required")
    .isInt({ min: 1, max: 100 })
    .withMessage("Minimum players must be between 1 and 100"),
  check("maxPlayers")
    .notEmpty()
    .withMessage("Number of the maximum players required is required")
    .isInt({ min: 1, max: 300 })
    .withMessage("Maximum players must be between 1 and 100"),
];
