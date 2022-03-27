// Imports
const db = require("../data/dbConfig");

// Return posts, usersname of poster, and comment counts
function getPosts() {
  // rename
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
function getPostByPostId(id) {
  return db.select("*").from("post").where("id", id);
}

// Exports
module.exports = {
  getPosts,
  getPostByPostId,
};
