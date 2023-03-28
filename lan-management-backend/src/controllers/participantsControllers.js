import { check, validationResult } from "express-validator";
import { Participant } from "../models/participant.js";

export const getParticipants = async (req, res) => {
  const participants = await Participant.find();
  res.status(200).send(participants);
};

export const getParticipantById = async (req, res) => {
  let participantId = req.query.participantId;
  let participant = await Participant.findOne({ participantId: participantId });
  if (!participant) {
    res.status(404).send("Event not found");
  } else {
    res.status(200).send(participant);
  }
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

export const addParticipant = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  await checkDuplicateParticipantId(req, res, async () => {
    const participant = new Participant({
      participantId: req.body.participantId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gamerTag: req.body.gamerTag,
      seatNumber: req.body.seatNumber,
    });

    participant
      .save(participant)
      .then((participant) => res.status(201).send(participant));
  });
};

export const patchParticipant = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    let result = await Participant.find({
      participantId: req.query.participantId,
    });
    if (result.length === 0) {
      res.status(404).send("ParticipantID not found or invalid");
    } else {
      let response = await Participant.findOneAndUpdate(
        { participantId: req.query.participantId },
        {
          $set: {
            firstName: req.query.firstName,
            lastName: req.query.lastName,
            gamerTag: req.query.gamerTag,
            seatNumber: req.query.seatNumber,
          },
        },
        { new: true }
      );
      res.status(200).send(response);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating Participant");
  }
};

export const deleteParticipantById = async (req, res) => {
  try {
    let result = await Participant.find({
      participantId: req.query.participantId,
    });
    if (result.length === 0) {
      res.status(404).send("ParticipantID not found or invalid");
    } else {
      let response = await Participant.findOneAndDelete({
        eventId: req.query.participantId,
      });
      res.status(200).send(response);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting participant");
  }
};

export const deleteAllParticipants = async (req, res) => {
  try {
    let response = await Participant.deleteMany({});
    res.status(200).send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting all participants");
  }
};

//Method to check if the participant ID already exists in the database
export const checkDuplicateParticipantId = async (req, res, next) => {
  try {
    const participantId = req.body.participantId;
    const participant = await Participant.findOne({ participantId });
    if (participant) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Participant ID already exists" }] });
    }
    next();
  } catch (err) {
    console.error(err);
    res.status(500).send("participantId check failed");
  }
};

// attached as third param in a route for the patch method
export const patchParticipantValidator = [
  check("participantId")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("Participant ID is required"),
  check("firstName")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("First Name of the participant is required"),
  check("lastName")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("Last Name of the participant is required"),
  check("gamerTag")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("Gamer Tag of the participant is required"),
];

// attached as second param in a route
export const newParticipantValidator = [
  check("participantId").notEmpty().withMessage("Participant ID is required"),
  check("firstName")
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ min: 2 })
    .withMessage("First name must be at least 2 characters long"),
  check("lastName")
    .notEmpty()
    .withMessage("Last name is required")
    .isLength({ min: 2 })
    .withMessage("Last name must be at least 2 characters long"),
  check("gamerTag").notEmpty().withMessage("Gamertag is required"),
];
