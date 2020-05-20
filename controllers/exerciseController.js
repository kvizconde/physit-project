const exerciseModel = require('../models/exerciseData');

// Get exercise
exports.getExercise = async (req, res) => {
  try {
    // Checks if the patient currently has exercises assigned
    const exerciseList = await exerciseModel.getPatientExerciseList(req.session.patientID);

    console.log(exerciseList[0][0]);

    // If there are current exercises, load them
    if (exerciseList[0][0] !== undefined) {
      req.session.exerciseList = exerciseList[0];

      const bodypart = await exerciseModel.getAppointmentDetail(
        req.session.patientID,
        req.session.appointmentID,
      );
      // Check which bodypart has a preexisting injury throw an error if there is no record
      if (bodypart[0][0] === undefined) {
        res.render('exercise', {
          appointmentDetailError: true,
          title: 'Exercises',
          exerciseJSCSS: true,
          patient: req.session.patientInfo,
        });
      } // Load the exercises available to assign to patient
      else {
        const exercises = await exerciseModel.generateExercises(bodypart[0][0].bodypart);

        req.session.bodypart = bodypart[0][0];
        req.session.exercises = exercises[0];

        res.render('exercise', {
          patient: req.session.patientInfo,
          appointmentID: req.session.appointmentID,
          patientID: req.session.patientID,
          exercises: exercises[0],
          bodypart: req.session.bodypart,
          title: 'Exercises',
          exerciseJSCSS: true,
          currentExerciseList: req.session.exerciseList,
          assignedExercises: true,
        });
      }
    } // If there are no current exercises for the patient
    else {
      const bodypart = await exerciseModel.getAppointmentDetail(
        req.session.patientID,
        req.session.appointmentID,
      );
      // Throw error if no appointmentdetail assigned
      if (bodypart[0][0] === undefined) {
        res.render('exercise', {
          appointmentDetailError: true,
          title: 'Exercises',
          exerciseJSCSS: true,
          patient: req.session.patientInfo,
        });
      } // Loads exercises for the patient
      else {
        const exercises = await exerciseModel.generateExercises(bodypart[0][0].bodypart);

        req.session.bodypart = bodypart[0][0];
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

// Adds Exercises for the patient
exports.addExercisesForPatient = async (req, res) => {
  try {
    if (req.body === undefined) {
      var addToList = await exerciseModel.getPatientExerciseList(req.session.patientID);

      req.session.exerciseList = addToList[0];

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
      // Whenever user saves exercises it will delete first then reenter the exercises
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
      // Adds the exercises in the list to the db
      var addToList = await exerciseModel.getPatientExerciseList(req.session.patientID);
      req.session.exerciseList = addToList[0];

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
