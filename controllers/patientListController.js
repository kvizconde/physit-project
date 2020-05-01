const patientListModel = require('../models/patientListData');

exports.getAppointmentsOnDate = (req, res) => {
    let d = new Date("April 30, 2020 01:15:00");
    let year = d.getFullYear().toString();
    let day = d.getDate();
    let month = d.getMonth();
    
    if (month < 9) {
        month = month + 1;
        month = "0" + month;
    } else {
        month = month + 1;
        month.toString();
    }
   
    let date = year + "-" + month + "-" + day;
    console.log(date);

    let getPatientList = patientListModel.getAppointmentsOnDate()


}