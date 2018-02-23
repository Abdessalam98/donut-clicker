const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('socket', { title: 'Test Socket.io' });
});

module.exports = router;