const loginModel = require('../models/loginData');

// Test function that grabs all physiotherapist accounts from the database.
exports.getAllPT = (req, res, next) => {
  let pts = loginModel.getAllPTs();
  pts.then( ([rows, fieldData]) => {
    res.render('index', {title : "testData",
                         testData : rows,
                         indexJSCSS : true
                        });
  });
}

// Basic log in authentication function. (Needs some clean up)
exports.logIn = (req, res) => {
  let user = req.body.username;
  let pword = req.body.password;

  if (user && pword) {
    let attempt = loginModel.logIn(user, pword);
      attempt.then( ([data, metadata]) => {
        console.log(typeof data[0]);
        if ((typeof data[0]) == "object") {
          res.render("loggedIn", {title : "HOME", indexJSCSS : true, userInfo : data[0]})
        } else {
          res.send("Incorrect username or password.");
        }
      }).catch( ([data, metadata]) => {
          res.send("catch: " + data);
      });
  } else {
    res.send("Username or Password cannot be left empty.");
    res.end();
  }
}

