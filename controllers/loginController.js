const loginModel = require('../models/loginData');

exports.getLogin = (req, res, next) => {
  res.render('index', {
    title: 'Login Page',
    indexJSCSS: true,
  });
};

// Test function that grabs all physiotherapist accounts from the database.
exports.getAllPT = (req, res, next) => {
  const pts = loginModel.getAllPTs();

    pts.then( ([rows, fieldData]) => {
      res.render('index', {title: 'testData', 
                           testData: rows, 
                           indexJSCSS: true});
    });
};

// Basic log in authentication function. (Needs some clean up)
exports.postLogIn = (req, res) => {

  let d = new Date("April 30, 2020 01:15:00");
  let year = d.getFullYear().toString();
  let day = d.getDate();
  let month = d.getMonth();
    
  if (month < 9) {
    month = month + 1;
    month = "0" + month;
  } else {
    month = month + 1;
    month.toString();
  }
   
  let date = year + "-" + month + "-" + day;

  const email = req.body.physioID;
  const pword = req.body.password;

  const getPatientListAttempt = loginModel.getAppointmentsOnDate(email, date);

  getPatientListAttempt.then( ([plist, metadata]) => {
    let patientList = plist;

    const logInAttempt = loginModel.logIn(email, pword);

    logInAttempt.then( ([data, metadata]) => {
      if (typeof data[0] === 'object') {
        res.render('patientList', {title: 'HOME', 
                                  patientListJSCSS: true, 
                                  indexJSCSS: false, 
                                  physiotherapist: data[0],
                                  patients : patientList});
      } else {
        res.render('index', {
          title: 'Login Page',
          indexJSCSS: true,
        });
      }
    }).catch( (data) => {
      res.send("catch: " + data);
    });

  });

};
