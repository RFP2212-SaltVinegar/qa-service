const { Pool } = require('pg');
const dotenv = require('dotenv').config();

const pool = new Pool({
  host: process.env.HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

pool.connect()
  .then(() => console.log('DB successfully connected'))
  .catch((err) => console.error(err))

module.exports = pool;
