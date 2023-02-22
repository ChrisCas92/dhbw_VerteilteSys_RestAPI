import express from "express";
import {
  getParticipants,
  getParticipantById,
  getParticipantLastName,
  getParticipantGamerTag,
  addParticipant,
  newParticipantValidators,
} from "../controllers/participantsControllers.js";

const router = express.Router();

router.get("/", getParticipants);
router.get("/search", getParticipantLastName);
router.get("/gamerTag", getParticipantGamerTag);
router.get("/:id", getParticipantById);
router.post("/add", newParticipantValidators, addParticipant);

export default router;
