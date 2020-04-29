const loginModel = require('../models/loginData');

// Grabs the main starting page
exports.getLogin = (req, res, next) => {
    res.render('index', {
        title: 'Login Page',
        indexJSCSS: true,
    });
}

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

function loadingPatientList(physioID) {

    const appointmentData = loginModel.getAppointmentsForPhysio(physioID);

    appointmentData.then(([data, metadata]) => {
        

    }).catch(([data, metadata]) => {
        res.send("catch: " + data);
    });

}

// Basic log in authentication function. (Needs some clean up)
exports.postLogIn = (req, res) => {
    const email = req.body.physioID;
    const pword = req.body.password;

    const attempt = loginModel.logIn(email, pword);

    attempt.then(([data, metadata]) => {
        
        console.log(data[0]);
        console.log(typeof data[0]);
        if (typeof data[0] === 'object') {
            res.render('patientList', {
            title: 'HOME',
            patientListJSCSS: true,
            indexJSCSS: false,
            physiotherapist: data[0],
            });
        } else {
            res.send('Username and password combination is invalid!');
            // res.redirect('/');

        }
    })
    .catch(([data, metadata]) => {
        res.send("catch: " + data);
    });
};
