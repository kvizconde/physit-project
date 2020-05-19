const express = require('express');

const router = express.Router();
const exerciseController = require('../controllers/exerciseController');

router.get('/exercise', exerciseController.getExercise);

router.post('/exercise', exerciseController.addExercisesForPatient);

// // LOCAL - DON'T TOUCH
// router.route('/exercise').get(exerciseController.getExercise);

module.exports = router;
