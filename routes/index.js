var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('https://github.com/RunningTheSnail/EQ');
});

module.exports = router;
