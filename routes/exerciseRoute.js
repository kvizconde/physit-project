const express = require('express');

const router = express.Router();
const exerciseController = require('../controllers/exerciseController');
const auth = require('../util/auth');

router.route('/exercise').get(auth, exerciseController.getExercise);

router.route('/exercise').post(auth, exerciseController.addExercisesForPatient);

module.exports = router;
