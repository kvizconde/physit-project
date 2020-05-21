const express = require('express');

const router = express.Router();
const timelineController = require('../controllers/timelineController');
const auth = require('../util/auth');

router.route('/timeline').get(auth, timelineController.getTimeline);

module.exports = router;
