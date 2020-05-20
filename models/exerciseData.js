const db = require('../util/database');

function addAppointmentDetail(patientAppointmentDetail) {
  db.execute(`INSERT INTO appointmentdetail(patientID, appointmentID, bodypart, symptom, diagnosis, active, recoveryDate) VALUES(
    "${patientAppointmentDetail.patientID}",
    "${patientAppointmentDetail.appointmentID}",
    "${patientAppointmentDetail.bodypart}",
    "${patientAppointmentDetail.symptom}",
    "${patientAppointmentDetail.diagnosis}",
    "${patientAppointmentDetail.active}",
    "${patientAppointmentDetail.recoveryDate}"
  )`);
}

function getAllExercises(patientID) {
  db.execute(`SELECT * FROM patientexerciseslist WHERE patientID = ${patientID};`);
}

function getAppointmentDetail(patientID, appointmentID) {
  return db.execute(
    `SELECT bodypart FROM appointmentdetail WHERE patientID = ${patientID} AND
     appointmentID = ${appointmentID};`,
  );
}

function generateExercises(bodypart) {
  return db.execute(
    `SELECT * FROM exercise WHERE bodypart = "${bodypart}" ORDER BY RAND() LIMIT 9`,
  );
}

function addPatientExerciseList(patientID, exerciseID, reps, sets, title) {
  db.execute(`INSERT INTO patientexerciselist(patientID, exerciseID, repetitions, sets, title) VALUES(
    ${patientID},
    ${exerciseID},
    ${reps},
    ${sets},
    "${title}"
  );`);
}

function getPatientExerciseList(patientID, exerciseID) {
  return db.execute(
    `SELECT * FROM patientexerciselist WHERE patientID = ${patientID}`,
  );
}

module.exports = {
  getPatientExerciseList,
  addPatientExerciseList,
  getAllExercises,
  getAppointmentDetail,
  generateExercises,
};
