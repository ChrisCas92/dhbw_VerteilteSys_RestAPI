import express from "express";
import {
  findParticipants,
  findParticipantsById,
  getParticipants,
  addParticipant,
  newParticipantValidators,
} from "../controllers/participantsControllers.js";

const router = express.Router();

router.get("/", getParticipants);
router.get("/search", findParticipants);
router.post("/add", newParticipantValidators, addParticipant);
router.get("/:id", findParticipantsById);

export default router;
