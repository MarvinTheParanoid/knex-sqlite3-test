// Imports
const express = require("express");
const { handleLogin } = require("../controllers/login");

// Init
const router = express.Router();

// Routes
router.get("/", (req, res) => {
  res.render("login");
});
router.post("/", handleLogin);

// Export
module.exports = router;
