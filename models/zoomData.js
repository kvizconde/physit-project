const db = require("../util/database");

async function postAppointmentDetail(patientID, appointmentID, bodyPart, symptom, diagnosis, recoveryDate) {
  await db.execute(
    `INSERT INTO appointmentdetail (patientID, appointmentID, bodyPart, symptom, diagnosis, recoveryDate) 
         VALUES (${patientID}, ${appointmentID}, "${bodyPart}", "${symptom}", "${diagnosis}", "${recoveryDate}");`
  )
}

async function getInjury(patientID, bodypart) {
  try {
    const response = await db.execute(
      `SELECT *
       FROM appointmentdetail
       WHERE patientID = ${patientID}
           AND bodypart = "${bodypart}";`
    );
    
    if (response[0].length === 0) {
      return undefined;
    } else {
      return response;
    }
  } catch (error) {
    throw error
  }
}

async function updateInjury(patientID, bodypart, symptom, diagnosis) {
  try {
    await db.execute(
      `UPDATE appointmentdetail
       SET symptom = "${symptom}", diagnosis = "${diagnosis}"
       WHERE patientID = ${patientID}
           AND bodypart = "${bodypart}";`
    )
  } catch (error) {
    throw error
  }
}

module.exports = {
  postAppointmentDetail,
  getInjury,
  updateInjury
};