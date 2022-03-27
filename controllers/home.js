// Imports
const { getPosts } = require("../models/post");

// GET home
async function homeRoute(req, res) {
  try {
    const posts = await getPosts();
    res.render("home", { title: "Posts", posts });
  } catch (error) {
    console.log(error);
    res.status(500).send("There was an error getting posts.");
  }
}

// Exports
module.exports = homeRoute;
