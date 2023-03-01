import mongoose from "mongoose";

const eventDetailsSchema = new mongoose.Schema({
  Event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  Wlan: boolean,
  Internet: boolean,
  Parkplätze: boolean,
  Duschen: boolean,
  Catering: boolean,
  Rauchen: boolean,
  Dampfen: boolean,
  MitbringenVonSpeisenUndGetränkenErlaubt: boolean,
  AbgetrennterSchlafbereich: boolean,
  Sachpreise: boolean,
  Unter18JahrenErlaubt: boolean,
});

export const EventDetails = mongoose.model("EventDetails", eventDetailsSchema);
