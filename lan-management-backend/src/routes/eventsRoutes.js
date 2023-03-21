import express from "express";
import {
  getEventsByName,
  getEventsById,
  getEvents,
  getEventsByLocation,
  getEventsByDate,
  addEvent,
  patchEvent,
  deleteEventById,
  deleteAllEvents,
  newEventValidator,
  patchEventValidator,
} from "../controllers/eventsControllers.js";

const router = express.Router();

router.get("/", getEvents);
router.get("/search", getEventsByName);
router.get("/location", getEventsByLocation);
router.get("/date", getEventsByDate);
router.get("/eventid", getEventsById);
router.post("/add", newEventValidator, addEvent);
router.patch("/patch", patchEventValidator, patchEvent);
router.delete("/deleteEventById", patchEventValidator, deleteEventById);
router.delete("/deleteAllEvents", deleteAllEvents);

export default router;
