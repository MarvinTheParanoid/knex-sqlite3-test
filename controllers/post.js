// Imports
const { getPostByID } = require("../models/post");

// Get post data given id
async function singlePostPage(req, res) {
  const id = Number(req.params.id); //what if type conversion fails?
  try {
    const post = await getPostByID(id); // get comments by id...
    console.log(`POST DATA: ${post}`);
    res.render("post", { title: "Single Post", post });
  } catch (error) {
    console.log(error);
    res.status(500).send("Could not load this post...");
  }
}

// Exports
module.exports = {
  singlePostPage,
};
