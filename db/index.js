const { Client } = require('pg');
const dotenv = require('dotenv');

const client = new Client({
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

module.exports = client;
