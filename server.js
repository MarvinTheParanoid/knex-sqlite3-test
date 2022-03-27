// Imports
const express = require("express");
const requestLogger = require("./middleware/requestLogger");

// Init
const app = express();

// Middleware
app.use(requestLogger);

// Routes
app.get("/", (req, res) => {
  res.send("Home");
});

// Export
module.exports = app;
