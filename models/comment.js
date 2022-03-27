// Imports
const db = require("../data/dbConfig");

// getCommentsByPostId - including usernames
function getCommentsByPostId(id) {
  return db
    .select(["comment.*", "user.username"])
    .from("comment")
    .leftJoin("user", "comment.user_id", "user.id")
    .where("comment.post_id", id)
    .orderBy("comment.created_at");
}

// Exports
module.exports = {
  getCommentsByPostId,
};
