const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  eventID:{ type: String, required: true },
  email:{ type: String, required: true  },
  name:{ type: String, default: "" }, 
  foodOrder: { type: String, default: "" },
  specialRequest: { type: String, default: "" },
  price:{ type: Number, default: 0 } 
  // date: { type: String }
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;