import { check, validationResult } from "express-validator";
import { Participant } from "../models/participant.js";

export const getParticipants = async (req, res) => {
  const participants = await Participant.find();
  res.status(200).send(participants);
};

export const getParticipantById = async (req, res) => {
  let participant = await Participant.findById(req.params.id);
  res.status(200).send(participant);
};

export const getParticipantLastName = async (req, res) => {
  let participantLastName = await Participant.find({
    lastName: req.query.lastName,
  });
  res.status(200).send(participantLastName);
};

export const getParticipantGamerTag = async (req, res) => {
  let participantGamerTag = await Participant.find({
    gamerTag: req.query.gamerTag,
  });
  res.status(200).send(participantGamerTag);
};

export const addParticipiants = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const participant = new Participant({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gamerTag: req.body.gamerTag,
    seatNumber: req.body.seatNumber,
  });

  participant
    .save(participant)
    .then((participant) => res.status(201).send(participant));
};

// attached as second param in a route
export const newEventDetailsValidators = [
  check("firstName").notEmpty().withMessage("First name is required"),
  check("lastName").notEmpty().withMessage("Last name is required"),
  check("gamerTag").notEmpty().withMessage("Gamertag is required"),
];
