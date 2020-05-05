const express = require('express');

const router = express.Router();
const exerciseController = require('../controllers/exerciseController');

router.get('/exercises', exerciseController.getExercise);

module.exports = router;
