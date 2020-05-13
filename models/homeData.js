const db = require("../util/database");

function postAppointmentDetail(appointmentID, bodyPart, symptom, diagnosis, recoveryDate) {
  db.execute(
    `INSERT INTO appointmentdetail (appointmentID, bodyPart, symptom, diagnosis, recoveryDate) 
         VALUES (${appointmentID}, "${bodyPart}", "${symptom}", "${diagnosis}", "${recoveryDate}");`
  )
}

async function getAllActiveInjuries(patientID) {
  try {
    const response = await db.execute(
      `SELECT * FROM appointmentdetail 
       WHERE patientID = ${patientID}
       AND active = 1;`
    )
    if (response[0].length === 0) {
      return undefined
    } else {
      return response
    }
  } catch (error) {
    throw error
  }
  
}

function postSetInjuryInactive(appointmentID, bodypart) {
  return db.execute(`UPDATE appointmentdetail
                  SET active = 0
                  WHERE (appointmentID = ${appointmentID} AND bodypart = "${bodypart}");`);
}

async function getAppointmentDetail(appointmentID) {
  try {
    const response = await db.execute(
      `SELECT p.firstName, p.lastName, TIMESTAMPDIFF(YEAR, p.dateOfBirth, CURDATE())  AS age, p.height, p.weight
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
  getAppointmentDetail,
  getAllActiveInjuries
};
