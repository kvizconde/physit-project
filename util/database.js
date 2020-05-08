const mysql = require("mysql2");

// remote database
const poolRemote = mysql.createPool({
  host: "remotemysql.com",
  user: "HHTh4BmIT4",
  database: "HHTh4BmIT4",
  password: "zOl8IYGf1s",
});

// clever-cloud
// const poolRemote = mysql.createPool({
//     host: 'b3wnd7j8rn8z25sczm2l-mysql.services.clever-cloud.com',
//     user: 'utxu7ewpav2kgjpe',
//     database: 'b3wnd7j8rn8z25sczm2l',
//     password: 'gER8FFQhiCDWrHfoMvCp',
// });

// local database
const poolLocal = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "comp4944-project",
  password: "COMP-4711",
});

// uses poolLocal if poolRemote is not available
const pool = poolRemote || poolLocal;

module.exports = pool.promise();
