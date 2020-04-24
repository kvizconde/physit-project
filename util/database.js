const mysql = require('mysql2');

// TODO: @Daniel - Fill up user, database, password via remotemysql.com
const pool = mysql.createPool({
  host: 'remotemysql.com',
  user: '',
  database: '',
  password: '',
});

module.exports = pool.promise();
