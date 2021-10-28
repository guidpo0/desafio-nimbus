const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
  host: 'localhost',
  user: 'trybe',
  password: 'marajoara14',
  database: 'Nimbus',
});
