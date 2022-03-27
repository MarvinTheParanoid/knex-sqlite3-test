// Imports
const knex = require("knex");
const config = require("../knexfile");

// Init
const db = knex(config.development);

// Exports
module.exports = db;

// Note - This can probably be done in models when the db needs to be used... ??
