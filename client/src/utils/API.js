import axios from "axios";

export default {
  // Gets all events
  loadEvents: function() {
    return axios.get("/api/event");
  },
  // Gets the event with the given id
  getEvent: function(id) {
    return axios.get("/api/event/" + id);
  },
  // Deletes the event with the given id
  deleteEvent: function(id) {
    return axios.delete("/api/event/" + id);
  },
  // Saves a event to the database
  saveEvent: function(eventData) {
    return axios.post("/api/event", eventData);
  },
  createNewOrder: function(newOrders) {
    return axios.post("/api/orders", {newOrders});
  },
  updateOrder: function(orderId, updatedOrder) {
    return axios.put("/api/orders/" + orderId, updatedOrder);
  },
  findAllOrders: function(eventId) {
    return axios.get("/api/event/" + eventId + "/orders");
  }
};
