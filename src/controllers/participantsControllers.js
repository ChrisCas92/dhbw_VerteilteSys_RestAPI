import { check, validationResult } from "express-validator";

const participants = [
  {
    id: 0,
    firstName: "Max",
    lastName: "Müller",
    gamerTag: "Maxima",
    seatNumber: 217,
  },
  {
    id: 1,
    firstName: "Jack",
    lastName: "Doe",
    gamerTag: "Jaxxy",
    seatNumber: 187,
  },
  {
    id: 2,
    firstName: "Christian",
    lastName: "Wisniewski",
    gamerTag: "Wizzi",
    seatNumber: 492,
  },
  {
    id: 3,
    firstName: "Blaze",
    lastName: "Zrnic",
    gamerTag: "XxBlazeXx",
    seatNumber: 52,
  },
];

export const getParticipants = (req, res) => {
  res.status(200).send(participants);
};

export const findParticipants = (req, res) => {
  let result = participants.filter(
    (participant) => participant.firstName == req.query.firstName
  );
  res.status(200).send(result);
};

export const findParticipantsById = (req, res) => {
  let participant = participants.find((p) => p.id == req.params.id);
  res.status(200).send(participant);
};

export const addParticipant = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const participant = req.body;
  participants.push(participant);
  res.status(201).send(`Added ${participant.name} to event collection`);
};

// attached as second param in a route
export const newParticipantValidators = [
  check("firstName").notEmpty().withMessage("First name is required"),
  check("lastName").notEmpty().withMessage("Last name is required"),
  check("gamerTag").notEmpty().withMessage("Gamertag is required"),
];
