const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: { type: String, required: true },
  hostId: { type: String, required: true },
  sendToEmail: { type: String, required: true },
  restaurantName: { type: String, required: true },
  restaurantMenuURL: { type: String, required: true },
  eventDateTime: { type: String, required: true },
  orderDateTime: { type: String, required: true },
  message: String,
  fromName: String,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;