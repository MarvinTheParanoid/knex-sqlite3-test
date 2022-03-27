// Imports
const express = require("express");
const exhbs = require("express-handlebars");
const requestLogger = require("./middleware/requestLogger");
const homeRoute = require("./controllers/home");
const postRoute = require("./routes/postRoute");
const userRoute = require("./routes/userRoute");

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
app.use("/user", userRoute);
app.get("*", (req, res) => {
  //404 - make an errors view that takes status and message, and also logs error
  res.send(`${req.url} does not exist.`);
});

// Export
module.exports = app;
