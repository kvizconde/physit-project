const loginModel = require('../models/loginData');


// Test function that grabs all physiotherapist accounts from the database.
exports.getAllPT = (req, res, next) => {
    let pts = loginModel.getAllPTs();
    pts.then( ([rows, fieldData]) => {
        res.render('index', {
            title : "testData",
            testData : rows,
            indexJSCSS : true
            });
    });
}

// Basic log in authentication function. (Needs some clean up)
exports.postLogIn = (req, res) => {
    let user = req.body.username;
    let pword = req.body.password;

    let attempt = loginModel.logIn(user, pword);
    attempt.then( ([data, metadata]) => {
        console.log(data[0]);
        console.log(typeof data[0]);
        if ((typeof data[0]) == "object") {
          res.render("home", {
            title : "HOME", 
            indexJSCSS : false,
            physiotherapist : data[0]})
        } else {
          res.send("Username and password combination is invalid!");
        }
    }).catch( ([data, metadata]) => {
        res.send("catch: " + data);
    });

}

