const express = require('express');

const router = express.Router();
const loginController = require("../controllers/loginController");

router.get('/', logInController.postLogin);

module.exports = router;
