const patientListModel = require('../models/patientListData');
const loginModel = require("../models/loginData");

const getDate = () => {
  
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
  
  return date;
}

exports.renderPatientList = async (req, res) => {
  try {
    const physioID = req.session.physioID
    const physiotherapist = await loginModel.getPhysiotherapist(physioID)
    const patientList = await patientListModel.getPatientAppointmentData(physioID, getDate())

    res.render('patientList', {title: 'HOME', 
                               patientListJSCSS: true, 
                               indexJSCSS: false, 
                               physiotherapist: physiotherapist[0][0],
                               patients : patientList[0]})
  } catch (error) {
    throw error
  }
}
