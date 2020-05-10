const db = require('../util/database');

// Join appointment and patient table to get related data
function getPatientAppointmentData(physioID, date) {
<<<<<<< HEAD
  return db.execute(
    `SELECT a.appointmentID, a.physioID, p.firstName, p.lastName, p.phoneNumber, a.appointmentTime, a.appointmentEndTime
=======
    return db.execute(
        `SELECT a.appointmentID, a.patientID, a.physioID, p.firstName, p.lastName, p.phoneNumber, a.appointmentTime, a.appointmentEndTime
>>>>>>> 4aeb3b5014115c6ff0795335b9d75c41838a3baa
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
