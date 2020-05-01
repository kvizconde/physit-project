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
function logIn(physioID, pword) {
  return db.execute(
    `SELECT * FROM physiotherapist WHERE (physioID = "${physioID}" AND password = "${pword}")`,
  );
}

function getAppointmentsOnDate(physioID, date) {
  return db.execute(`SELECT p.firstName, p.lastName, p.phoneNumber, a.appointmentTime, a.appointmentEndTime
                       FROM appointment a
    	                   INNER JOIN patient p 
                           ON a.patientID = p.patientID
                           WHERE a.physioID = "${physioID}"
                           AND appointmentDate = "${date}";`);
}

// // LOCAL VERSION
// function logIn(physioID, pword) {
//   return db.execute(
//     `SELECT * FROM physiotherapist WHERE (physioID = "${physioID}" AND password = "${pword}")`,
//   );
// }

module.exports = {
  getPhysio,
  getAllPTs,
  logIn,
  getAppointmentsOnDate
};
