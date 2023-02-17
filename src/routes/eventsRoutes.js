import express from "express";
import {
  findEvents,
  findEventsById,
  getEvents,
  addEvent,
  newEventValidators,
} from "../controllers/eventsControllers.js";

const router = express.Router();

router.get("/", getEvents);
router.get("/search", findEvents);
router.get("/:id", findEventsById);
router.post("/add", newEventValidators, addEvent);

export default router;
