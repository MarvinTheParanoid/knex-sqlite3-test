// Imports
const db = require("../data/dbConfig");

// Return posts, usersname of poster, and comment counts
function getPosts() {
  return db
    .select([
      "post.id",
      "post.title",
      "post.likes",
      "post.updated_at",
      "user.username",
    ])
    .count("comment.post_id as comments")
    .from("post")
    .leftJoin("comment", "post.id", "comment.post_id")
    .innerJoin("user", "post.user_id", "user.id")
    .groupBy("comment.post_id")
    .orderBy("post.updated_at");
}

// Return single post
function getPostByID(id) {
  return "Model called with ID";
}

// Exports
module.exports = {
  getPosts,
  getPostByID,
};
