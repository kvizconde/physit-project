// Get exercise
exports.getShoulder = (req, res) => {
  res.render('shoulder', {
    title: 'Shoulder',
    homepageJSCSS: true,
    zoomJSCSS: true,
  });
};
