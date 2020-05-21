const express = require('express');

const router = express.Router();
const zoomController = require('../controllers/zoomController');
const auth = require('../util/auth');

router.route('/shoulder').get(auth, zoomController.getShoulder);
router.route('/knee').get(auth, zoomController.getKnee);

router.route('/saveData').post(auth, zoomController.saveData);

module.exports = router;
