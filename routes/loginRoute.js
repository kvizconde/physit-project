const express = require('express');
const loginController = require("../controllers/loginController");
const router = express.Router();

// Test route that runs getAllPT from the log in controller.
router.get('/', loginController.getAllPT);

// Route that runs log in authentication.
router.post('/login', loginController.logIn);

module.exports = router;
