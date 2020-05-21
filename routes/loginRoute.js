const express = require("express");

const router = express.Router();
const loginController = require('../controllers/loginController');

// Route that runs log in authentication.
router.route('/').post(loginController.login);

module.exports = router;
