const express = require("express");

const router = express.Router();
const loginController = require('../controllers/loginController');

// Route that runs log in authentication.
router.route('/').post(loginController.login);

// User log out.
router.route('/logout').post(loginController.logout);

module.exports = router;
