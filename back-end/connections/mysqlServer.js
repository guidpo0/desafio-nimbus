require('dotenv').config();
const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
  host: 'us-cdbr-east-04.cleardb.com',
  user: 'bd20733f81f909',
  password: process.env.DB_PASSWORD,
  database: 'heroku_5eb1b5a5878e473',
});
