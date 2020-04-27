const express = require('express');
<<<<<<< HEAD
const loginController = require("../controllers/loginController");
=======
>>>>>>> 43116cd0f7ba29f948f892da3841ef16e65718b7
const router = express.Router();
const loginController = require("../controllers/loginController");

// Test route that runs getAllPT from the log in controller.
router.get('/', loginController.getAllPT);

<<<<<<< HEAD
// Test route that runs getAllPT from the log in controller.
router.get('/', loginController.getAllPT);

// Route that runs log in authentication.
router.post('/login', loginController.logIn);
=======
// Route that runs log in authentication.
router.post('/homepage', loginController.postLogIn);
>>>>>>> 43116cd0f7ba29f948f892da3841ef16e65718b7

module.exports = router;
