const loginModel = require('../models/logInData');

// TODO: @Daniel or @Benson define login controller functions here

exports.postLogin = (req, res) => {
    res.render('', {
        title: 'Login Page',
        data: req.body
    });
}