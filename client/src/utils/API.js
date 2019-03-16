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
  }
};
