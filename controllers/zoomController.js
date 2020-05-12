// Get zoomed shoulder
exports.getShoulder = (req, res) => {
  res.render('shoulder', {
    title: 'Shoulder',
    homepageJSCSS: true,
    zoomJSCSS: true,
    patient: req.session.patientInfo
  });
};

// Get zoomed knee
exports.getKnee = (req, res) => {
  res.render('knee', {
    title: 'Knee',
    homepageJSCSS: true,
    zoomJSCSS: true,
    patient: req.session.patientInfo
  });
};
