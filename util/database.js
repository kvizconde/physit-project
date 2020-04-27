const mysql = require('mysql2');

// TODO: @Daniel - Fill up user, database, password via remotemysql.com
// const pool = mysql.createPool({
//   host: 'remotemysql.com',
//   user: '',
//   database: '',
//   password: '',
// });

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'comp4944-physit',
  password: '',
});

module.exports = pool.promise();
