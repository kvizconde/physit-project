// Get timeline
exports.getTimeline = (req, res) => {
  res.render('timeline', {
    title: 'Timeline',
    timelineJSCSS: true,
  });
};
