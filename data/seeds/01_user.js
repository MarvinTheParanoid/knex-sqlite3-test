exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("user").del();
  // Add entries
  await knex("user").insert([
    { username: "JW" },
    { username: "LZ" },
    { username: "Bear" },
    { username: "Shark" },
    { username: "Tim?" },
  ]);
};
