const exerciseModel = require('../models/exerciseData');

// Get exercise
exports.getExercise = async (req, res) => {
  try {
    // console.log(req.session.appointmentID);
    // console.log(req.session.patientID);

    const exerciseList = await exerciseModel.getPatientExerciseList(req.session.patientID);

    if (exerciseList) {
      req.session.exerciseList = exerciseList[0];

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

        req.session.bodypart = bodypart[0][0];

        console.log(exercises[0]);
        req.session.exercises = exercises[0];

        res.render('exercise', {
          patient: req.session.patientInfo,
          appointmentID: req.session.appointmentID,
          patientID: req.session.patientID,
          exercises: req.session.exercises,
          bodypart: req.session.bodypart,
          title: 'Exercises',
          exerciseJSCSS: true,
          currentExerciseList: req.session.exerciseList,
          assignedExercises: true,
        });
      }
    } else {
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

        req.session.bodypart = bodypart[0][0];

        console.log(exercises[0]);
        req.session.exercises = exercises[0];
        res.render('exercise', {
          patient: req.session.patientInfo,
          appointmentID: req.session.appointmentID,
          patientID: req.session.patientID,
          exercises: exercises[0],
          bodypart: bodypart[0][0],
          title: 'Exercises',
          exerciseJSCSS: true,
          assignedExercises: false,
        });
      }
    }
  } catch (error) {
    throw error;
  }
};

// Adds
exports.addExercisesForPatient = async (req, res) => {
  try {
    // var patientExerciseList = [];

    if (req.body === undefined) {
      var addToList = await exerciseModel.getPatientExerciseList(req.session.patientID);
      console.log(addToList[0]);

      req.session.exerciseList = addToList[0];

      console.log(req.session.exerciseList);

      res.render('exercise', {
        patient: req.session.patientInfo,
        appointmentID: req.session.appointmentID,
        patientID: req.session.patientID,
        exercises: req.session.exercises,
        bodypart: req.session.bodypart,
        title: 'Exercises',
        exerciseJSCSS: true,
        currentExerciseList: req.session.exerciseList,
        assignedExercises: true,
      });
    } else {

      await exerciseModel.deletePatientExerciseList(req.session.patientID);
      // Chooses all the exercises in the list and appends them to the db
      for (let i = 0; req.body.exerciseID[i] !== undefined; i++) {
        await exerciseModel.addPatientExerciseList(
          req.session.patientID,
          req.body.exerciseID[i],
          req.body.reps[i],
          req.body.sets[i],
          req.body.title[i],
        );
      }
      var addToList = await exerciseModel.getPatientExerciseList(req.session.patientID);
      console.log(addToList[0]);

      req.session.exerciseList = addToList[0];

      console.log(req.session.exerciseList);

      res.render('exercise', {
        patient: req.session.patientInfo,
        appointmentID: req.session.appointmentID,
        patientID: req.session.patientID,
        exercises: req.session.exercises,
        bodypart: req.session.bodypart,
        title: 'Exercises',
        exerciseJSCSS: true,
        currentExerciseList: req.session.exerciseList,
        assignedExercises: true,
      });
    }
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
