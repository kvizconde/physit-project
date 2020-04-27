const db = require('../util/database');

// TODO: @Daniel - Define database functions here

function addPhysioAccount(physioInfo) {
  db.execute(
    `INSERT into physiotherapist(physioID, password, firstname, lastname) values ('${physioInfo.physioID}', '${physioInfo.password}', '${physioInfo.firstname}', '${physioInfo.lastname}')`,
  );
}

function getSpecificPhysio(physioID) {
  return db.execute(`SELECT * FROM comp4944-physit.physiotherapist WHERE physioID = ${physioID}`);
}

function getSpecificPhysioAccount(physioID, password) {
  return db.execute(`SELECT * FROM physiotherapist WHERE (physioID = "${physioID}" AND
    password = "${password}")`);
}

module.exports = {
  getSpecificPhysio,
  getSpecificPhysioAccount,
  addPhysios: addPhysioAccount,
}
