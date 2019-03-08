const router = require("express").Router();
const bookRoutes = require("./books");
const signinRoutes = require('./signin');

// Book routes
router.use("/books", bookRoutes);
router.use('/signin', signinRoutes);

module.exports = router;
