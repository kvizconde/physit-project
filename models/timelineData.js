const db = require('../util/database');

function getRecoveryTime(patientID) {
    db.execute(`SELECT recoveryTime,  FROM appointmentdetail WHERE patientID = "${patientID}" AND active = 1;`);
}

exports.module = {
    getRecoveryTime
}