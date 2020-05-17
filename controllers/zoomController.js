const homeModel = require('../models/homeData');
const zoomModel = require('../models/zoomData');

// Get zoomed shoulder
exports.getShoulder = async (req, res) => {
  req.session.bodypart = 'shoulder';
  const { patientID } = req.session;

  const existingInjury = await zoomModel.getInjury(patientID, 'shoulder');

  if (existingInjury === undefined) {
    res.render('shoulder', {
      title: 'Shoulder',
      homepageJSCSS: true,
      zoomJSCSS: true,
      patient: req.session.patientInfo,
    });
  } else {
    const injury = parseInjuryData(existingInjury);

    res.render('shoulder', {
      title: 'Shoulder',
      homepageJSCSS: true,
      zoomJSCSS: true,
      patient: req.session.patientInfo,
      injury,
    });
  }
};

// Get zoomed knee
exports.getKnee = async (req, res) => {
  req.session.bodypart = 'knee';
  const { patientID } = req.session;

  const existingInjury = await zoomModel.getInjury(patientID, 'knee');

  if (existingInjury === undefined) {
    res.render('knee', {
      title: 'Knee',
      homepageJSCSS: true,
      zoomJSCSS: true,
      patient: req.session.patientInfo,
    });
  } else {
    const injury = parseInjuryData(existingInjury);

    res.render('knee', {
      title: 'Knee',
      homepageJSCSS: true,
      zoomJSCSS: true,
      patient: req.session.patientInfo,
      injury,
    });
  }
};

exports.saveData = async (req, res) => {
  try {
    const { patientID } = req.session;
    const { appointmentID } = req.session;
    const { bodypart } = req.session;
    const { symptom } = req.body;
    const { diagnosis } = req.body;
    const recoveryDate = "2069-12-25";

    const { save_clear } = req.body;

    if (save_clear == "save") {
      console.log("SAVING...")
      const overwrite = await zoomModel.getInjury(patientID, bodypart);

      if (overwrite === undefined) {
        await zoomModel.postAppointmentDetail(patientID, appointmentID, bodypart, symptom, diagnosis, recoveryDate);
        res.redirect('/' + bodypart);
      } else {
        await zoomModel.updateInjury(patientID, bodypart, symptom, diagnosis, recoveryDate);
        res.redirect('/' + bodypart); 
      }
    } else {
      console.log("CLEARING...")
      const { patientID } = req.session;
      const { bodypart } = req.session;

      await zoomModel.completeInjury(patientID, bodypart);

      res.redirect('/home');
    }
  } catch (error) {
    throw error;
  }
};

const parseInjuryData = info => {
  try {
    const data = info[0][0];
    const injuryInfo = {
      exists: true,
      symptom: data.symptom,
      diagnosis: data.diagnosis,
    };
    
    return injuryInfo;
  } catch (error) {
    throw error;
  }
};

// LOCAL - DON'T TOUCH
// exports.getShoulder = (req, res) => {
//   res.render('shoulder', {
//     title: 'Shoulder',
//     homepageJSCSS: true,
//     zoomJSCSS: true,
//   });
// };
