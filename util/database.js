const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'remotemysql.com',
  user: 'HHTh4BmIT4',
  database: 'HHTh4BmIT4',
  password: 'zOl8IYGf1s',
});

module.exports = pool.promise();
