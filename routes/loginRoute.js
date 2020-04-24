const express = require('express');

const router = express.Router();
const logInController = require("../controllers/loginController");

router.post('/', logInController.postLogin);

module.exports = router;