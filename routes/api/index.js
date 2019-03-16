const router = require("express").Router();
// const bookRoutes = require("./books");
const eventRoutes = require("./event");
const signinRoutes = require('./signin');

// Book routes
// router.use("/books", bookRoutes);
router.use("/event", eventRoutes);
signinRoutes(router)

module.exports = router;
