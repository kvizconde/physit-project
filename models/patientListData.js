const db = require('../util/database');

// Join appointment and patient table to get related data
function getPatientAppointmentData(physioID, date) {
    return db.execute(
        `SELECT a.appointmentID, a.patientID, a.physioID, p.firstName, p.lastName, p.phoneNumber, 
                TIME_FORMAT(a.appointmentTime, "%H:%i") AS appointmentTime, 
                TIME_FORMAT(a.appointmentEndTime, "%H:%i") AS appointmentEndTime
            FROM appointment a
            INNER JOIN patient p 
                ON a.patientID = p.patientID
                WHERE a.physioID = "${physioID}"
                AND a.appointmentDate = "${date}";`,
  );
}

module.exports = {
  getPatientAppointmentData,
};
