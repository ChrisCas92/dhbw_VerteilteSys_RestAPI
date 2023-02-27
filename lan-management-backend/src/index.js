import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import eventsRoutes from "./routes/eventsRoutes.js";
import gamesRoutes from "./routes/gamesRoutes.js";
import participantsRoutes from "./routes/participantsRoutes.js";
import swaggerDocs from "../swaggerDocs.js";

// app initialization
const app = express();

// port initialization
const port = 4000;

// app uses json
app.use(bodyParser.json());

// only event, game and participant and documentation is valid
// else throws 404
app.use("/events", eventsRoutes);
app.use("/games", gamesRoutes);
app.use("/participants", participantsRoutes);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.all("*", (req, res) => {
  res.sendStatus(404);
});

// connect database
mongoose.connect("mongodb://mongo:27017/tournament").then(() => {
  console.log("Connected to database");
});

// URL: http://localhost:4000
app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
