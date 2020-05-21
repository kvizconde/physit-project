const loginModel = require('../models/loginData');

exports.login = async (req, res) => {
  try {
    const email = req.body.physioID;
    const pword = req.body.password;

    // Grabs to see if the physio account exists in the db
    var physio = await loginModel.getPhysiotherapist(email);

    // Checks if the physioID yields a result
    if (physio[0][0] !== undefined) {
      const user = await loginModel.logIn(email, pword);
      // if password doesn't work with user, throw password error
      if (user === undefined) {
        res.render('index', {
          title: 'Login Page',
          indexJSCSS: true,
          userError: false,
          passwordError: true,
          homepageJSCSS: false,
        });
      } else {
        req.session.physioID = email;
        res.redirect('/patientList');
      }
    } //If there is no user, throw a user error
    else {
      res.render('index', {
        title: 'Login Page',
        indexJSCSS: true,
        userError: true,
        passwordError: false,
        homepageJSCSS: false,
      });
    }
  } catch (error) {
    throw error;
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};
