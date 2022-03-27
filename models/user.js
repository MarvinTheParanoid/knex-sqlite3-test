// Imports
const db = require("../data/dbConfig");

// getUserById
function getUserById(id) {
  return db.select("*").from("user").where("user.id", id);
}

// Exports
module.exports = {
  getUserById,
};
