const db = require('../util/database');

function getAllExercises(patientID) {
  db.execute(`SELECT * FROM patientexerciseslist WHERE patientID = "${patientID}";`);
}

function getAppointmentDetail(patientID, appointmentID) {
  return db.execute(
    `SELECT bodypart FROM appointmentdetail WHERE patientID = ${patientID} AND
     appointmentID = ${appointmentID};`,
  );
}

function generateExercises(bodypart) {
  return db.execute(`SELECT * FROM exercise WHERE bodypart = "${bodypart}" ORDER BY RAND() LIMIT 9`);
}

module.exports = {
  getAllExercises,
  getAppointmentDetail,
  generateExercises,
};
