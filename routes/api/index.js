const router = require("express").Router();
// const bookRoutes = require("./books");
const eventRoutes = require("./event");
const ordersRoutes = require("./orders");
const userRoutes = require("./user");
const signinRoutes = require('./signin');

// Book routes
// router.use("/books", bookRoutes);
router.use("/event", eventRoutes);
router.use("/orders", ordersRoutes);
router.use("/user", userRoutes);

signinRoutes(router)

module.exports = router;
