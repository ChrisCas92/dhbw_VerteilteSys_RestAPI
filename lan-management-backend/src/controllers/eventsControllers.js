import { check, validationResult } from "express-validator";
import { Event } from "../models/event.js";

/*[
  {
    name: "Lock and Load 14",
    participants: 512,
    location: "6210 Sursee",
    startDate: "2023-02-24",
    endDate: "2023-02-26",
    entry: "14:00",
    start: "16:00",
    end: "14:00",
  },
  {
    name: "Y&F LAN-PARTY",
    participants: 40,
    location: "78467 Konstanz",
    startDate: "2023-03-03",
    endDate: "2023-03-05",
    entry: "15:00",
    start: "17:00",
    end: "09:00",
  },
  {
    name: "Gamesession Hannover 2023",
    participants: 218,
    location: "30827 Garbsen",
    startDate: "2023-03-30",
    endDate: "2023-04-02",
    entry: "18:00",
    start: "19:30",
    end: "11:00",
  },
  {
    name: "Caggtus Leipzig",
    participants: 2300,
    location: "04109 Leipzig",
    startDate: "2023-04-13",
    endDate: "2023-04-16",
    entry: "18:00",
    start: "20:30",
    end: "14:00",
  },
];*/

export const getEvents = async (req, res) => {
  const events = await Event.find();
  res.status(200).send(events);
};

export const getEventsById = async (req, res) => {
  let event = await Event.findById(req.params.id);
  res.status(200).send(event);
};

export const getEventsByLocation = async (req, res) => {
  let result = await Event.find({ location: req.query.location });
  res.status(200).send(result);
};

export const getEventsByDate = async (req, res) => {
  let eventDate = await Event.find({ startDate: req.query.startDate });
  res.status(200).send(eventDate);
};

export const getEventsByName = async (req, res) => {
  let eventName = await Event.find({ name: req.query.name });
  res.status(200).send(eventName);
};

export const addEvent = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const events = new Event({
    name: req.body.name,
    participants: req.body.participants,
    location: req.body.location,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    entry: req.body.entry,
    start: req.body.start,
    end: req.body.end,
  });

  events.save(events).then((events) => res.status(201).send(events));
};

// attached as second param in a route
export const newEventValidators = [
  check("name").notEmpty().withMessage("Name of the event is required"),
  check("participants")
    .notEmpty()
    .withMessage("Number of participants is required"),
  check("location")
    .notEmpty()
    .withMessage("Postalcode and name of the location is required"),
];
