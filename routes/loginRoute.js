const express = require('express');

const router = express.Router();
const loginController = require('../controllers/loginController');

// // Test route that runs getAllPT from the log in controller.
// router.get('/', loginController.getAllPT);

// the render has been moved to loginController
router.get('/', loginController.getLogin);

// Route that runs log in authentication.
router.post('/patientList', loginController.postLogIn);

module.exports = router;
