const express = require('express');

const router = express.Router();
const timelineController = require('../controllers/timelineController');

router.get('/timeline', timelineController.getTimeline);

module.exports = router;
