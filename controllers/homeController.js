const homeModel = require('../models/homeData')

// Get home
exports.getHome = async (req, res) => {
  try {
    if(req.query.appointmentID) {
      req.session.appointmentID = req.query.appointmentID
    }
    const appID = req.session.appointmentID
    const patient = await homeModel.getAppointmentDetail(appID)

    res.render('home', {
      title: 'Patient Home',
      homepageJSCSS: true,
      patient: patient[0][0],
    })
  } catch (error) {
    throw error
  }
}

