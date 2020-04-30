const loginModel = require("../models/loginData");

// Gets the initial Login page for the app
exports.getLogin = (req, res, next) => {
  res.render("index", {
    title: "Login Page",
    indexJSCSS: true,
  });
};

// Logging into the patient list view
exports.postLogIn = (req, res) => {
  const email = req.body.physioID;
  const pword = req.body.password;
  let patientInformationList = [];

  const patientInfo = loginModel.getPatientAppointmentData(req.body.physioID);

  patientInfo
    .then(([patientData, metadata]) => {
      console.log(patientData[0]);

      for (let i = 0; typeof patientData[i] === "object"; i++) {
        patientInformationList[i] = patientData[i];
        console.log(patientInformationList[i]);
      }

      const attempt = loginModel.logIn(email, pword);

      attempt
        .then(([physioData, metadata]) => {
          console.log(physioData[0]);
          console.log(typeof physioData[0]);

          if (typeof physioData[0] === "object") {
            res.render("patientList", {
              title: "HOME",
              patientListJSCSS: true,
              indexJSCSS: false,
              physiotherapist: physioData[0],
              patients: patientInformationList,
            });
          } else {
            // TODO: @Benson or @Daniel please figure out a way to stop directing it to /calendar if password is invalid
            res.render("index", {
              title: "Login Page",
              indexJSCSS: true,
              passwordFailed: true,
            });
          }
        })
        // catch for physiotherapist select query
        .catch(([physioData, metadata]) => {
          res.send("catch: " + physioData);
        });
    })
    .catch(([patientData, metadata]) => {
      res.send("catch: " + patientData);
    });
};
