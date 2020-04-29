const db = require('../util/database');

function addPhysio() {
  return db.execute(`INSERT INTO physiotherapist`);
}

// Selects physiotherapist account with matching physioID.
function getPhysio(physioID) {
  return db.execute(`SELECT * FROM physit-project.physiotherapist WHERE physioID = "${physioID}"`);
}

// Selects all physiotherapist accounts in database.
function getAllPTs() {
  return db.execute(`SELECT * FROM physiotherapist`);
}

// Selects physiotherapist account that matches physioID and password.
function logInRemote(physioID, pword) {
  return db.execute(
    `SELECT * FROM physiotherapist WHERE (physioID = "${physioID}" AND pword = "${pword}")`,
  );
}

// LOCAL VERSION
function logInLocal(physioID, pword) {
  return db.execute(
    `SELECT * FROM physiotherapist WHERE (physioID = "${physioID}" AND password = "${pword}")`,
  );
}

// uses logInLocal if logInRemote is not available
const logIn = logInRemote || logInLocal;

module.exports = {
  getPhysio,
  getAllPTs,
  logIn,
};
