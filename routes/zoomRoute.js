const express = require('express');

const router = express.Router();
const zoomController = require('../controllers/zoomController');

router.get('/shoulder', zoomController.getShoulder);
router.get('/knee', zoomController.getKnee);

router.route('/saveData').post(zoomController.saveData);

// LOCAL - DON'T TOUCH
// router.route('/shoulder').get(zoomController.getShoulder);

module.exports = router;
