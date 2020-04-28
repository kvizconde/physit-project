const db = require('../util/database');

// Selects physiotherapist account with matching physioID.
function getPhysio(physioID) {
  return db.execute(`SELECT * FROM physit-project.physiotherapist WHERE physioID = "${physioID}"`);
}

// Selects all physiotherapist accounts in database.
function getAllPTs() {
  return db.execute(`SELECT * FROM physiotherapist`);
}

// Selects physiotherapist account that matches physioID and password.
function logIn(physioID, pword) {
  return db.execute(
    `SELECT * FROM physiotherapist WHERE (physioID = "${physioID}" AND pword = "${pword}")`,
  );
}

module.exports = {
  getPhysio,
  getAllPTs,
  logIn,
};
