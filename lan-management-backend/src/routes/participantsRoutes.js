import express from "express";
import {
  getParticipants,
  getParticipantById,
  getParticipantLastName,
  getParticipantGamerTag,
  addParticipant,
  patchParticipant,
  deleteParticipantById,
  deleteAllParticipants,
  newParticipantValidator,
  patchParticipantValidator,
} from "../controllers/participantsControllers.js";

const router = express.Router();

router.get("/", getParticipants);
router.get("/search", getParticipantLastName);
router.get("/gamerTag", getParticipantGamerTag);
router.get("/participantid", getParticipantById);
router.post("/add", newParticipantValidator, addParticipant);
router.patch("/patch", patchParticipantValidator, patchParticipant);
router.delete(
  "/deleteParticipantById",
  patchParticipantValidator,
  deleteParticipantById
);
router.delete("/deleteAllParticipants", deleteAllParticipants);

export default router;
