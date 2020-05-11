const exerciseModel = require('../models/exerciseData');

// Get exercise
exports.getExercise = async (req, res) => {
  try {
    const bodypart = await exerciseModel.getAppointmentDetail(
      req.session.patientID,
      req.session.appointmentID,
    );

    
    res.render('exercise', {
      title: 'Exercises',
      exerciseJSCSS: true,
    });
  } catch (error) {
    throw error;
  }
};
