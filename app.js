// Imports
const express = require("express");
const exhbs = require("express-handlebars");
const requestLogger = require("./middleware/requestLogger");
const homeRoute = require("./controllers/home");
const postRoute = require("./routes/postRoute");

// Init
const app = express();

// Middleware
app.use(requestLogger);

// View Engine
app.engine(".hbs", exhbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// Routes
app.get("/", homeRoute);
app.use("/post", postRoute);
app.get("*", (req, res) => {
  res.send(`${req.url} does not exist.`);
});

// Export
module.exports = app;
