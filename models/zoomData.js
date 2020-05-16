const db = require("../util/database");

async function postAppointmentDetail(patientID, appointmentID, bodypart, symptom, diagnosis, recoveryDate) {
  await db.execute(
    `INSERT INTO appointmentdetail (patientID, appointmentID, bodypart, symptom, diagnosis, recoveryDate) 
         VALUES (${patientID}, ${appointmentID}, "${bodypart}", "${symptom}", "${diagnosis}", "${recoveryDate}");`
  )
}

async function getInjury(patientID, bodypart) {
  try {
    const response = await db.execute(
      `SELECT *
       FROM appointmentdetail
       WHERE patientID = ${patientID}
           AND bodypart = "${bodypart}"
           AND active = 1;`
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
    );
    return
  } catch (error) {
    throw error
  }
}

async function deleteInjury(patientID, bodypart) {
  try {
    await db.execute(
      `DELETE FROM appointmentdetail
       WHERE patientID = ${patientID}
           AND bodypart = "${bodypart}"
           AND active = 1;`
    );
    return
  } catch (error) {
    throw error;
  }
}

async function completeInjury(patientID, bodypart) {
  try {
    await db.execute(
      `UPDATE appointmentdetail
       SET active = 0
       WHERE patientID = ${patientID}
           AND bodypart = "${bodypart}";`
    );
    return
  } catch (error) {
    throw error
  }
}

module.exports = {
  postAppointmentDetail,
  getInjury,
  updateInjury,
  deleteInjury,
  completeInjury
};