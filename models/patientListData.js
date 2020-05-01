const db = require('../util/database');

function getAppointmentsOnDate(physioID, date) {
    db.execute(`SELECT * FROM appointment WHERE physioID = "${physioID}" AND appointmentDate = "${date}"`);
}

function getPatientNameByPatientID(patientID) {
    db.execute(`SELECT * FROM patient WHERE patientID = "${patientID}"`);
}

module.exports = {
    getAppointmentsOnDate,
    getPatientNameByPatientID
}