const db = require('../util/database');

// function addPhysio() {
//     return db.execute(`INSERT INTO physiotherapist`);
// }

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

// Join appointment and patient table to get related data
function getPatientAppointmentData(physioID) {
  return db.execute(
    `SELECT a.physioID, p.firstName, p.lastName, p.phoneNumber, a.startTime, a.endTime
      FROM appointment a
        INNER JOIN patient p 
            ON a.patientID = p.patientID
            WHERE a.physioID = "${physioID}";`,
  ); 
}

module.exports = {
  getAllPTs,
  logIn,
  getPatientAppointmentData,
};
