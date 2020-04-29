const db = require('../util/database');

// function addPhysio() {
//     return db.execute(`INSERT INTO physiotherapist`);
// }

// Selects physiotherapist account with matching physioID.
function getPhysio(physioID) {
  return db.execute(`SELECT * FROM physit-project.physiotherapist WHERE physioID = "${physioID}"`);
}

// Selects all physiotherapist accounts in database.
function getAllPTs() {
  return db.execute(`SELECT * FROM physiotherapist`);
}

// Selects physiotherapist account that matches physioID and password.
// function logIn(physioID, pword) {
//   return db.execute(
//     `SELECT * FROM physiotherapist WHERE (physioID = "${physioID}" AND pword = "${pword}")`,
//   );
// }

// LOCAL VERSION
// pulling data to get the physio
function logIn(physioID, pword) {
  return db.execute(
    `SELECT * FROM physiotherapist WHERE (physioID = "${physioID}" AND password = "${pword}")`,
  );
}

//pulling appointments
function getAppointmentsForPhysio(physioID) {
  return db.execute(
    `SELECT * FROM appointment WHERE (physioID = "${physioID}")`,
    );
}

function getPatientInformation(patientID) {
  return db.execute(
    `SELECT * FROM patient WHERE (patientID = "${patientID}")`,
  );
}

module.exports = {
  getPhysio,
  getAllPTs,
  logIn,
  getAppointmentsForPhysio,
  getPatientInformation,
};
