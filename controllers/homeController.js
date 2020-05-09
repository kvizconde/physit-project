const homeModel = require('../models/homeData');
const loginController = require('../controllers/loginController');

// Get home
exports.getHome = async (req, res) => {
  console.log(req.session.physioID);
  console.log(req.session.patientData);

  res.render('home', {
    title: 'The Future of Physio',
    homepageJSCSS: true,
    session: req.session,
    patients: loginController.patientInfo,
  });
};
