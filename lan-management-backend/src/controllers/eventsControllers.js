import { check, validationResult } from "express-validator";
import { Event } from "../models/event.js";

/*[
  {
    "name": "Lock and Load 14",
    "location": "6210 Sursee",
    "startDate": "2023-02-24",
    "endDate": "2023-02-26",
    "entry": "14:00",
    "start": "16:00",
    "end": "14:00",
    "participants": 512
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
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  const events = await Event.find();
  res.status(200).send(events);
};

export const getEventsById = async (req, res) => {
  let eventId = req.query.eventId;
  let event = await Event.findOne({ eventId: eventId });
  if (!event) {
    res.status(404).send("Event not found");
  } else {
    res.status(200).send(event);
  }
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

  await checkDuplicateEventId(req, res, async () => {
    const events = new Event({
      eventId: req.body.eventId,
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
  });
};

export const patchEvent = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    let result = await Event.find({ eventId: req.query.eventId });
    if (result.length === 0) {
      res.status(404).send("EventID not found or invalid");
    } else {
      let response = await Event.findOneAndUpdate(
        { eventId: req.query.eventId },
        {
          $set: {
            name: req.query.name,
            location: req.query.location,
            startDate: req.query.startDate,
            endDate: req.query.endDate,
            entry: req.query.entry,
            start: req.query.start,
            end: req.query.end,
            participants: req.query.participants,
          },
        },
        { new: true }
      );
      res.status(200).send(response);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating game");
  }
};

export const deleteEventById = async (req, res) => {
  try {
    let result = await Event.find({ gameId: req.query.eventId });
    if (result.length === 0) {
      res.status(404).send("EventID not found or invalid");
    } else {
      let response = await Event.findOneAndDelete({
        eventId: req.query.eventId,
      });
      res.status(200).send(response);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting event");
  }
};

export const deleteAllEvents = async (req, res) => {
  try {
    let response = await Event.deleteMany({});
    res.status(200).send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting all events");
  }
};

//Method to check if event ID already exists in the database
export const checkDuplicateEventId = async (req, res, next) => {
  try {
    const eventId = req.body.eventId;
    const event = await Event.findOne({ eventId });
    if (event) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Event ID already exists" }] });
    }
    next();
  } catch (err) {
    console.error(err);
    res.status(500).send("eventId check failed");
  }
};

// attached as third param in a route for the patch method
export const patchEventValidator = [
  check("eventId")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("Event ID is required"),
  check("name")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("Name of the Event is required"),
  check("participants")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("Number of participants is required"),
  check("location")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("Postalcode and name of the location is required"),
];

// attached as second param in a route
export const newEventValidator = [
  check("eventId")
    .notEmpty()
    .withMessage("Event ID is required and should be not 0"),
  check("name")
    .notEmpty()
    .withMessage("Name of the event is required")
    .isLength(4, 100)
    .withMessage(
      "Name of the event must be at least 4 and max 100 characters long"
    ),
  check("participants")
    .notEmpty()
    .withMessage("Number of participants is required")
    .isLength(1, 4)
    .withMessage("Number of participants must be at most 4 digits long"),
  check("location")
    .notEmpty()
    .withMessage("Postalcode and name of the location is required")
    .isLength(4, 100)
    .withMessage(
      "Postalcode and name of the location must be at least 4 and max 100 characters long"
    ),
];
