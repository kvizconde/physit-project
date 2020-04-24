const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { indexJSCSS: true });
});

module.exports = router;
