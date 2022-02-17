// inside db/index.js
const { Client } = require("pg"); // imports the pg module

// supply the db name and location of the database
const client = new Client({
  password: "Camille904!",
  database: "juicebox-dev",
  user: "postgres",
});

module.exports = {
  client,
};
