const db = require('../util/database');

function getAllExercises(patientID) {
  db.execute(`SELECT * FROM patientexerciseslist WHERE patientID = "${patientID}";`);
}

function getAppointmentDetail(patientID, appointmentID) {
  db.execute(`SELECT bodypart FROM WHERE patientID = ${patientID} and
     appointmentID = ${appointmentID}`);
}

function generateExercises(bodypart) {
  db.execute(`SELECT * FROM exercise WHERE bodypart = "${bodypart}" ORDER BY RAND() LIMIT 9`);
}

module.exports = {
  getAllExercises,
  getAppointmentDetail,
};
