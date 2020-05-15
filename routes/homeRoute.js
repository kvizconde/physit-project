const express = require('express');

const router = express.Router();
const homeController = require('../controllers/homeController');
const auth = require('../util/auth');

// router.route('/home').get(auth, homeController.getHome);

// LOCAL - DON'T TOUCH
router.route('/home').get(homeController.getHome);

module.exports = router;
