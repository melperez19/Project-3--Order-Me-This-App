const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  name:{ type: String, required: true }, 
  foodOrder: { type: String, required: true },
  specialRequest: { type: String, required: false },
  price:{ type: Number, required: true }, 
  date: { type: Date, default: Date.now }

});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;