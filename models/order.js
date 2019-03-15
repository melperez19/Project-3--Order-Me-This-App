const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  foodOrder: { type: String, required: true },
  specialRequest: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;