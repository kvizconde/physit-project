const db = require('../util/database');

function getAllExercises(patientID) {
    db.execute(`SELECT * FROM patientexerciseslist WHERE patientID = "${patientID}";`);
}

module.exports = {
    getAllExercises
}