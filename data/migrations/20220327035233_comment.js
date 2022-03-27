// Define table
exports.up = async (knex) => {
  // may need to make this async...
  return knex.schema.createTable("comment", (table) => {
    table.increments(); //id - primary key
    table.text("content");
    table.integer("likes").notNullable().defaultsTo(0);
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("user")
      .onDelete("CASCADE")
      .index(); // foreign key user id
    table
      .integer("post_id")
      .notNullable()
      .references("id")
      .inTable("post")
      .onDelete("CASCADE")
      .index(); // foreign key user id
    table.timestamps(true, true); //created_at, updated_at
  });
};

// Rollback table
exports.down = async (knex) => {
  return await knex.schema.dropTable("comment");
};
