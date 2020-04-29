const express = require('express');

const router = express.Router();
const loginController = require('../controllers/loginController');

// // Test route that runs getAllPT from the log in controller.
// router.get('/', loginController.getAllPT);

// Route that runs log in authentication.
router.post('/calendar', loginController.postLogIn);
// ///////////////////////////////
// //////DON'T REMOVE THIS ///////
// ///////////////////////////////
// router.get('/', (req, res) => {
//   res.render('index', {
//     title: 'Login Page',
//     indexJSCSS: true,
//   });
// });
router.get('/', loginController.getLogin);

module.exports = router;
