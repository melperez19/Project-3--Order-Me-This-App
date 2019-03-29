const router = require("express").Router();
const eventRoutes = require("./event");
const ordersRoutes = require("./orders");
const userRoutes = require("./user");
const signinRoutes = require('./signin');

// App routes
router.use("/event", eventRoutes);
router.use("/orders", ordersRoutes);
router.use("/user", userRoutes);

signinRoutes(router)

module.exports = router;
