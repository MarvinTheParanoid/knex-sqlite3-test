// Define table
exports.up = async (knex) => {
  // may need to make this async...
  return await knex.schema.createTable("user", (table) => {
    table.increments(); //id - primary key
    table.string("first_name").notNullable();
    table.string("last_name");
    table.string("username").notNullable();
    table.timestamps(true, true); //created_at, updated_at
  });
};

// Rollback table
exports.down = async (knex) => {
  return await knex.schema.dropTable("user");
};

// On delete?
