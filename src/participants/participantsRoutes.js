import express from "express";
import {
  findParticipants,
  findParticipantsById,
  getParticipants,
  addParticipant,
  newParticipantValidators,
} from "./participantsControllers.js";

const router = express.Router();

router.get("/", getParticipants);
router.get("/search", findParticipants);
router.get("/:id", findParticipantsById);
router.post("/add", newParticipantValidators, addParticipant);

export default router;
