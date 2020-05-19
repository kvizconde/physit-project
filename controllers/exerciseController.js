const exerciseModel = require('../models/exerciseData');

// Get exercise
exports.getExercise = async (req, res) => {
  try {
    console.log(req.session.appointmentID);
    console.log(req.session.patientID);

    const bodypart = await exerciseModel.getAppointmentDetail(
      req.session.patientID,
      req.session.appointmentID,
    );
    console.log(bodypart[0]);
    if (bodypart[0][0] === undefined) {
      res.render('exercise', {
        appointmentDetailError: true,
        title: 'Exercises',
        exerciseJSCSS: true,
        patient: req.session.patientInfo,
      });
    } else {
      console.log(bodypart[0][0].bodypart);
      const exercises = await exerciseModel.generateExercises(bodypart[0][0].bodypart);

      console.log(exercises[0]);
      res.render('exercise', {
        patient: req.session.patientInfo,
        appointmentID: req.session.appointmentID,
        patientID: req.session.patientID,
        exercises: exercises[0],
        bodypart: bodypart[0][0],
        title: 'Exercises',
        exerciseJSCSS: true,
      });
    }
  } catch (error) {
    throw error;
  }
};

// Adds
exports.addExercisesForPatient = async (req, res) => {
  try {

    console.log(req.session.patientID);
    console.log(req.session.patientInfo);
    console.log(req.body);

    const addToList = await exerciseModel.addPatientExerciseList(
      req.session.patientID,
      req.session.exerciseID,
      req.body.repetitions,
      req.body.sets,
    );

    res.render('exercise', {
      patient: req.session.patientInfo,
      appointmentID: req.session.appointmentID,
      patientID: req.session.patientID,
      exercises: exercises[0],
      bodypart: bodypart[0][0],
      title: 'Exercises',
      exerciseJSCSS: true,
      currentExerciseList: addToList,
      assignedExercises: true
    });
  } catch (error) {
    throw error;
  }
};
// LOCAL - DON'T TOUCH
// exports.getExercise = (req, res) => {
//   res.render('exercise', {
//     title: 'Exercise',
//     exerciseJSCSS: true,
//   });
// };
