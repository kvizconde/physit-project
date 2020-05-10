const db = require("../util/database");

function postAppointmentDetail(appointmentID, bodyPart, symptom, diagnosis, recoveryDate) {
  return db.execute(`INSERT INTO appointmentdetail (appointmentID, bodyPart, symptom, diagnosis, recoveryDate) 
                  VALUES (${appointmentID}, "${bodyPart}", "${symptom}", "${diagnosis}", "${recoveryDate}");`);
}

function getAllActiveInjuries(patientID) {
  return db.execute(`SELECT * FROM appointmentdetail
              WHERE patientID = ${patientID} AND active = 1;`);
}

function postSetInjuryInactive(appointmentID, bodypart) {
  return db.execute(`UPDATE appointmentdetail
                  SET active = 0
                  WHERE (appointmentID = ${appointmentID} AND bodypart = "${bodypart}");`);
}

async function getAppointmentDetail(appointmentID) {
  try {
    const response = await db.execute(
      `SELECT p.firstName, p.lastName, p.dateOfbirth 
       FROM appointment a
       INNER JOIN patient p 
       ON a.patientID = p.patientID
       WHERE appointmentID = ${appointmentID};`)
    if (response[0].length === 0) {
      return undefined;
    } else {
      return response;
    }
  } catch (error) {
    throw error
  }
}

module.exports = {
<<<<<<< HEAD
  getAppointmentDetail,
  postAppointmentDetail,
  getAllActiveInjuries,
  postSetInjuryInactive
=======
  getAppointmentDetail
>>>>>>> 4aeb3b5014115c6ff0795335b9d75c41838a3baa
};
