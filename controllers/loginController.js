const loginModel = require("../models/loginData");

exports.login = async (req, res) => {
  try {
    const email = req.body.physioID
    const pword = req.body.password

    const user = await loginModel.logIn(email, pword)

    // if user is not found. Needs to be fixed.
    if (user === undefined) {
      console.log('Invalid log in credentials')
      res.redirect('/')
    } else {
      req.session.physioID = email
      res.redirect('/patientList')
    }
  } catch (error) {
    throw error
  }
}
