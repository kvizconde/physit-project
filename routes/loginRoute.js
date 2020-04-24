const express = require('express');

const router = express.Router();
const logInController = require("../controllers/loginController");

router.get('/', logInController.postLogin);

module.exports = router;