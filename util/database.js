const mysql = require('mysql2');

// remote database
const poolRemote = mysql.createPool({
  host: 'remotemysql.com',
  user: 'HHTh4BmIT4',
  database: 'HHTh4BmIT4',
  password: 'zOl8IYGf1s',
});

// local database
const poolLocal = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'comp4944-project',
  password: 'COMP-4711',
});

// uses poolLocal if poolRemote is not available
// const pool = poolRemote || poolLocal;

//testing using the local
const pool = poolLocal;

module.exports = pool.promise();
