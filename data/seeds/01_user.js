exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("user").del();
  // Add entries
  await knex("user").insert([
    { first_name: "Jesse", last_name: "Wilson", username: "JW" },
    { first_name: "Lisa", last_name: "Zhou", username: "LZ" },
    { first_name: "Bear", username: "JBW" },
    { first_name: "Shark", last_name: "Wilson", username: "Shark" },
    { first_name: "Tim", last_name: "Enchanter, the", username: "Tim?" },
  ]);
};
