const express = require('express');
const router = express.Router();
const loginController = require("../controllers/loginController");

// ///////////////////////////////
// //////DON'T REMOVE THIS ///////
// ///////////////////////////////
// the render has been moved to loginController
router.get('/', loginController.getLogin);

// Route that runs log in authentication.
router.post('/calendar', loginController.postLogIn);

module.exports = router;
