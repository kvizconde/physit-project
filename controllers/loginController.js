const loginModel = require("../models/loginData");

exports.login = async (req, res) => {
  try {
    console.log(req.body.physioID);
    const email = req.body.physioID
    const pword = req.body.password

    const user = await loginModel.logIn(email, pword)

    // if user is not found. Needs to be fixed.
    if (user === undefined) {
      res.render('index', {
        title: 'Login Page',
        indexJSCSS: true,
        loginError: true,
        homepageJSCSS: false,
      });
    } else {
      req.session.physioID = email
      res.redirect('/patientList')
    }
  } catch (error) {
    throw error
  }
}
