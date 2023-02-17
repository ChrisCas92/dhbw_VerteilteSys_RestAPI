import { check, validationResult } from "express-validator";

const events = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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
    id: 3,
    name: "Caggtus Leipzig",
    participants: 2300,
    location: "04109 Leipzig",
    startDate: "2023-04-13",
    endDate: "2023-04-16",
    entry: "18:00",
    start: "20:30",
    end: "14:00",
  },
];

export const getEvents = (req, res) => {
  res.status(200).send(events);
};

export const findEvents = (req, res) => {
  let result = events.filter((event) => event.name == req.query.name);
  res.status(200).send(result);
};

export const findEventsById = (req, res) => {
  let event = events.find((e) => e.id == req.params.id);
  res.status(200).send(event);
};

export const addEvent = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const event = req.body;
  events.push(event);
  res.status(201).send(`Added ${event.name} to event collection`);
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
