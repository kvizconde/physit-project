const homeModel = require('../models/homeData');
const zoomModel = require('../models/zoomData');

// Get zoomed shoulder
exports.getShoulder = async (req, res) => {
  req.session.bodypart = "shoulder";
  const patientID = req.session.patientID;

  const existingInjury = await zoomModel.getInjury(patientID, "shoulder");

  if (existingInjury === undefined) {
    res.render('shoulder', {
      title: 'Shoulder',
      homepageJSCSS: true,
      zoomJSCSS: true,
      patient: req.session.patientInfo
    });
  } else {
    const injury = parseInjuryData(existingInjury);
    res.render('shoulder', {
      title: 'Shoulder',
      homepageJSCSS: true,
      zoomJSCSS: true,
      patient: req.session.patientInfo,
      injury: injury
    });
  }
};

// Get zoomed knee
exports.getKnee = async (req, res) => {
  req.session.bodypart = "knee";
  const patientID = req.session.patientID;

  const existingInjury = await zoomModel.getInjury(patientID, "knee");

  if (existingInjury === undefined) {
    res.render('knee', {
      title: 'Knee',
      homepageJSCSS: true,
      zoomJSCSS: true,
      patient: req.session.patientInfo
    });
  } else {
    const injury = parseInjuryData(existingInjury);
    res.render('knee', {
      title: 'Knee',
      homepageJSCSS: true,
      zoomJSCSS: true,
      patient: req.session.patientInfo,
      injury: injury
    });
  }
};

exports.saveData = async (req,res) => {
  try {
    const patientID = req.session.patientID;
    const appointmentID = req.session.appointmentID;
    const bodypart = req.session.bodypart;
    const symptom = req.body.symptoms;
    const diagnosis = req.body.diagnosis;
    const recoveryDate = req.body.recoveryDate;

    const overwrite = await zoomModel.getInjury(patientID, bodypart);

    if (overwrite === undefined) {
      await zoomModel.postAppointmentDetail(patientID, appointmentID, bodypart, symptom, diagnosis, recoveryDate);
      res.redirect('/home'); // !!! might want to change this !!!
    } else {
      await zoomModel.updateInjury(patientID, bodypart, symptom, diagnosis, recoveryDate);
      res.redirect('/home'); // !!! might want to change this !!!
    }
  } catch (error) {
    throw error;
  }
};

exports.completeInjury = async (req, res) => {
  try {
    const patientID = req.session.patientID;
    const bodypart = req.session.bodypart;

    await zoomModel.completeInjury(patientID, bodypart);

    res.redirect('/home');

  } catch (error) {
    throw error
  }
}

exports.deleteInjury = async (req, res) => {
  try {
    const patientID = req.session.patientID;
    const bodypart = req.session.bodypart;

    await zoomModel.deleteInjury(patientID, bodypart);

    res.redirect('/home');

  } catch (error) {
    throw error
  }
}

const parseInjuryData = info => {
  try {
    const data = info[0][0];
    const injuryInfo = {
      exists: true,
      symptom: data.symptom,
      diagnosis: data.diagnosis,
      recoveryDate: data.recoveryDate
  };
  return injuryInfo;
  } catch (error) {
    throw error;
  }
};