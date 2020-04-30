const loginModel = require("../models/loginData");

// Grabs the main starting page
exports.getLogin = (req, res, next) => {
  res.render("index", {
    title: "Login Page",
    indexJSCSS: true,
  });
};

// Test function that grabs all physiotherapist accounts from the database.
// exports.getAllPT = (req, res, next) => {
//     const pts = loginModel.getAllPTs();

//     pts.then(([
//         rows,
//         fieldData
//     ]) => {
//         res.render('index', {
//         title: 'testData',
//         testData: rows,
//         indexJSCSS: true,
//         });
//     });
// };

// Basic log in authentication function. (Needs some clean up)
exports.postLogIn = (req, res) => {
  const email = req.body.physioID;
  const pword = req.body.password;
  let patientInformationList = [];

  const patientInfo = loginModel.getPatientAppointmentData(req.body.physioID);

  patientInfo.then(([patientData, metadata]) => {
    
    console.log(patientData[0]);

    for(let i = 0; typeof patientData[i] === 'object'; i++) {
        patientInformationList[i] = patientData[i];
        console.log(patientInformationList[i]);
    }

  const attempt = loginModel.logIn(email, pword);

  attempt.then(([physioData, metadata]) => {
      console.log(physioData[0]);
      console.log(typeof physioData[0]);

      if (typeof physioData[0] === "object") {
        res.render("patientList", {
          title: "HOME",
          patientListJSCSS: true,
          indexJSCSS: false,
          physiotherapist: physioData[0],
          patients: patientInformationList
        });
      } else {
        res.send("Username and password combination is invalid!");
        // res.redirect('/');
      }
    })
    // catch for physiotherapist select query
    .catch(([physioData, metadata]) => {
      res.send("catch: " + physioData);
    });
    }).catch(([patientData, metadata]) => {
        res.send("catch: " + patientData);
    });
};
