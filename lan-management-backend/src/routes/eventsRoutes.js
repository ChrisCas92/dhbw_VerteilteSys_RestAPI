import express from "express";
import {
  getEventsByName,
  getEventsById,
  getEvents,
  getEventsByLocation,
  getEventsByDate,
  addEvent,
  newEventValidators,
} from "../controllers/eventsControllers.js";

const router = express.Router();

router.get("/", getEvents);
router.get("/search", getEventsByName);
router.get("/location", getEventsByLocation);
router.get("/date", getEventsByDate);
router.get("/:id", getEventsById);
router.post("/add", newEventValidators, addEvent);

export default router;
