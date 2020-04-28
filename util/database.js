const mysql = require('mysql2');

// remote database
// const pool = mysql.createPool({
//   host: 'remotemysql.com',
//   user: 'HHTh4BmIT4',
//   database: 'HHTh4BmIT4',
//   password: 'zOl8IYGf1s',
// });

//local database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'comp4944-project',
  password: 'password',
});

module.exports = pool.promise();
