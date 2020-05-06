const db = require('../util/database');

function postAppointmentDetail(appointmentID, bodyPart, symptom, diagnosis, recoveryDate) {
  db.execute(`INSERT INTO appointmentdetail (appointmentID, bodyPart, symptom, diagnosis, recoveryDate) 
                  VALUES (${appointmentID}, "${bodyPart}", "${symptom}", "${diagnosis}", "${recoveryDate}");`);
}

function getAllActiveInjuries(patientID) {
  db.execute(`SELECT * FROM appointmentdetail
              WHERE patientID = ${patientID} AND active = 1;`);
}

function postSetInjuryInactive(appointmentID, bodypart) {
  db.execute(`UPDATE appointmentdetail
                  SET active = 0
                  WHERE (appointmentID = ${appointmentID} AND bodypart = "${bodypart}");`);
}

exports.module = {
  postAppointmentDetail,
  getAllActiveInjuries,
  postSetInjuryInactive
};