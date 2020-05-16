const express = require('express');

const router = express.Router();
const zoomController = require('../controllers/zoomController');

router.get('/shoulder', zoomController.getShoulder);
router.get('/knee', zoomController.getKnee);

router.route('/saveData').post(zoomController.saveData);

module.exports = router;
