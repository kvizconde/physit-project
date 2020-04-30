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
<<<<<<< HEAD
  return db.execute(
    `SELECT a.physioID, p.firstName, p.lastName, p.phoneNumber, a.appointmentTime, a.appointmentEndTime
=======
    return db.execute(
        `SELECT a.physioID, p.firstName, p.lastName, p.phoneNumber, a.appointmentTime, a.appointmentEndTime
>>>>>>> 40181e448493899c293d46b95dff58ce3013f7f2
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

module.exports = {
    getAllPTs,
    logIn,
    getPatientAppointmentData,
};