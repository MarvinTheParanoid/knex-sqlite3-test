// Imports
const express = require("express");
// const { singlePostPage } = require("../controllers/post");

// Init
const router = express.Router();

// Routes
router.get("/:id", (req, res) => {
  res.send(`Page for user: ${req.params.id}`);
});

// Export
module.exports = router;
