const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Login Page',
    indexJSCSS: true,
  });
});

module.exports = router;
