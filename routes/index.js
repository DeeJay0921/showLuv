var express = require('express');
var router = express.Router();
var Path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile( Path.resolve('views/dist/index.html') )
});

module.exports = router;
