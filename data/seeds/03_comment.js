exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("comment").del();
  // Add entries
  await knex("comment").insert([
    { content: "Hello, Computer...", user_id: 5, post_id: 1 },
    { content: "Hello, Bear!", user_id: 1, post_id: 1 },
    { content: "No.", user_id: 5, post_id: 1 },
    { content: "Can someone please translate this?", user_id: 2, post_id: 2 },
    { content: "Yes.", user_id: 3, post_id: 2 },
    { content: "It says not to translate it...", user_id: 1, post_id: 2 },
    { content: "Don't be silly", user_id: 4, post_id: 2 },
    { content: "I just want to be part of this...", user_id: 5, post_id: 2 },
  ]);
};
