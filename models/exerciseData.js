const db = require('../util/database');

function getAllExercises(patientID) {
  db.execute(`SELECT * FROM patientexerciseslist WHERE patientID = "${patientID}";`);
}

function generateExercises(bodypart) {
  db.execute(`SELECT * FROM exercise WHERE bodypart = "${bodypart}"`);
}

module.exports = {
  getAllExercises,
};
