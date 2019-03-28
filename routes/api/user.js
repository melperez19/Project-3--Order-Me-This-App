const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/events"
// router.route("/")
//   .get(userController.findAll)
//   .post(userController.create);

// Matches with "/api/user/:id/event"
router
  .route("/:id/event")
  .get(eventsController.loadEventsByHost)
  
// Matches with "/api/events/:id"
// router
//   .route("/:id")
//   .get(userController.loadEventsByHost)
//   .put(userController.update)
//   .delete(userController.remove);

module.exports = router;