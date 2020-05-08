const db = require('../util/database');

// Selects all physiotherapist accounts in database.
function getPhysiotherapist(physioID) {
    return db.execute(`SELECT * FROM physiotherapist WHERE physioID = "${physioID}";`);
}

// pulling data to get the physio
async function logIn(physioID, pword) {
    try {
        const response = await db.execute(
            `SELECT * FROM physiotherapist WHERE (physioID = "${physioID}" AND password = "${pword}")`,
        );
        if (response[0].length === 0) {
            return undefined;
        } else {
            return response;
        }
    } catch (error) {
        throw error;
    }
    
}

// Join appointment and patient table to get related data
function getPatientAppointmentData(physioID, date) {
    return db.execute(
        `SELECT a.physioID, p.firstName, p.lastName, p.phoneNumber, a.appointmentTime, a.appointmentEndTime
            FROM appointment a
            INNER JOIN patient p 
                ON a.patientID = p.patientID
                WHERE a.physioID = "${physioID}"
                AND a.appointmentDate = "${date}";`,
    );
}
module.exports = {
    getPhysiotherapist,
    logIn,
    getPatientAppointmentData,
};