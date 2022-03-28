// Imports
const express = require("express");
const exhbs = require("express-handlebars");
const cookieParser = require("cookie-parser");
const requestLogger = require("./middleware/requestLogger");
const handleSession = require("./middleware/handleSession");
const homeRoute = require("./controllers/home");
const postRoute = require("./routes/postRoute");
const userRoute = require("./routes/userRoute");
const loginRoute = require("./routes/loginRoute");

// Init
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(cookieParser());
app.use(handleSession);

// View Engine
app.engine(".hbs", exhbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// Routes
app.get("/", homeRoute);
app.use("/login", loginRoute);
app.use("/post", postRoute);
app.use("/user", userRoute);
app.get("*", (req, res) => {
  //404 - make an errors view that takes status and message, and also logs error
  res.send(`${req.url} does not exist.`);
});

// Export
module.exports = app;
