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
    
    console.log(bodypart);
    const exercises = await exerciseModel.generateExercises(
      bodypart
    );
    
    res.render('exercise', {
      title: 'Exercises',
      exerciseJSCSS: true,
    });
  } catch (error) {
    throw error;
  }
};
