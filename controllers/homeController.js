const homeModel = require('../models/homeData')

// Get home
exports.getHome = async (req, res) => {
  try {
    if(req.query.appointmentID && req.query.patientID) {
      req.session.appointmentID = req.query.appointmentID
      req.session.patientID = req.query.patientID
    }

    console.log(req.query.patientID)
    const appID = req.session.appointmentID
    const patient = await homeModel.getAppointmentDetail(appID)

    res.render('home', {
      title: 'Patient Home',
      homepageJSCSS: true,
      patient: patient[0][0],
    })
    console.log(req.session.patientID)
  } catch (error) {
    throw error
  }
}

