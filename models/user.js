// Imports
const db = require("../data/dbConfig");

// addUser
function addUser(userData) {
  return db("user").insert(userData);
}

// delete user

// update user

// getUsers
function getUsers() {
  return db.select().from("user");
}

// Exports
module.exports = {
  getUsers,
};
