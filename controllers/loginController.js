const loginModel = require("../models/loginData");
export let patientInfo = [];

// Gets the initial Login page for the app
exports.getLogin = (req, res) => {
  res.render("index", {
    title: "Login Page",
    indexJSCSS: true,
  });
};

// Logging into the patient list view
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

  const getPatientListAttempt = loginModel.getPatientAppointmentData(email, date);

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