const express = require('express');

const router = express.Router();

router.get('/home', (req, res) => {
  res.render('home', {
    title: 'The Future of Physio',
    homepageJSCSS: true,
  });
});

module.exports = router;
