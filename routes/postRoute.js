// Imports
const express = require("express");
const { singlePostPage } = require("../controllers/post");

// Init
const router = express.Router();

// Routes
router.get("/:id", singlePostPage);

// Export
module.exports = router;
