const homeModel = require('../models/homeData');
const loginController = require('../controllers/loginController');

// Get home
exports.getHome = async (req, res) => {
  try {
    console.log(req.session.physioID);
    console.log(req.query.appointmentID);

    if(req.query.appointmentID) {
      req.session.appointmentID = req.query.appointmentID;
    }

    console.log(req.session.appointmentID);
    const appointID = await homeModel.getAppointmentDetail(req.session.appointmentID);
    console.log(appointID[0][0]);

    res.render('home', {
      title: 'The Future of Physio',
      homepageJSCSS: true,
      patient: appointID[0][0],
    });
  } catch (error) {
    throw error;
  }
};

// exports.getHome = async (req, res) => {

//   try {
//     const appID = req.session.appointmentID
//     const appInfo = await homeModel.getAppointmentDetail(appID)

//     if (appInfo === undefined) {
//       console.log("error finding appointment")
//     } else {
//       console.log(appInfo)
//       res.render('home', {
//         title: 'Patient Homepage',
//         homepageJSCSS: true,
//         patient: appInfo[0]
//       })
//     }
//   } catch (error) {
//     throw error
//   }

// }
