const db = require('../util/database');

// Selects all physiotherapist accounts in database.
function getAllPTs() {
    return db.execute(`SELECT * FROM physiotherapist`);
}

// pulling data to get the physio
function logIn(physioID, pword) {
    return db.execute(
        `SELECT * FROM physiotherapist WHERE (physioID = "${physioID}" AND password = "${pword}")`,
    );
}

// Join appointment and patient table to get related data
function getPatientAppointmentData(physioID) {
    return db.execute(
        `SELECT a.physioID, p.firstName, p.lastName, p.phoneNumber, a.appointmentTime, a.appointmentEndTime
      FROM appointment a
        INNER JOIN patient p 
            ON a.patientID = p.patientID
            WHERE a.physioID = "${physioID}";`,
    );
}

// LOCAL VERSION
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
    getAllPTs,
    logIn,
    getPatientAppointmentData,
    getAppointmentsOnDate
};
