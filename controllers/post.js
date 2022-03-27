// Imports
const { getPostByPostId } = require("../models/post");
const { getUserById } = require("../models/user");
const { getCommentsByPostId } = require("../models/comment");

// Get post data given id
async function singlePostPage(req, res) {
  const id = Number(req.params.id); //what if type conversion fails?
  try {
    const [post] = await getPostByPostId(id);
    const [poster] = await getUserById(post.id);
    const comments = await getCommentsByPostId(post.id);
    res.render("post", { title: "Single Post", post, poster, comments });
  } catch (error) {
    console.log(error);
    res.status(500).send("Could not load this post...");
  }
}

// Exports
module.exports = {
  singlePostPage,
};
