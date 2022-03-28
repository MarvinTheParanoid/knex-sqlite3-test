// Imports
const db = require("../data/dbConfig");

// add user
function addUser(username) {
  return db.insert({ username }).into("user");
}

// getUserByName
function getUserByUsername(username) {
  return db.select("*").from("user").where("username", username);
}

// getUserById
function getUserById(id) {
  return db.select("*").from("user").where("user.id", id);
}

// Exports
module.exports = {
  getUserById,
  getUserByUsername,
  addUser,
};
