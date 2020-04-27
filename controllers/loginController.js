const loginModel = require('../models/loginData');
let physioIDHolder = {};
let passwordHolder = {};

// TODO: @Daniel or @Benson define login controller functions here

exports.postLogin = ('/', (req, res, next) => {
    let physioID = req.body.physioID;
    let physioPassword = req.body.password;
    
    console.log(physioID);
    console.log(physioPassword);

    let physio = loginModel.getSpecificPhysioAccount(physioID, physioPassword);

    physio.then(([data, metadata]) => {

        console.log(data);

        res.render('home', {
            physiotherapist: data[0],
            indexJSCSS: true
        });
    }); 
});

exports.getLogin = ('/', (req, res) => {
  res.render('index', { 
      indexJSCSS: true 
  });
});

// exports.postLogin = ('/', (req, res) => {
//     res.render('', {
//         title: 'Home screen',
//         data: req.body
//     });
// });
