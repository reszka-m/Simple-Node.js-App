var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Simple App'});
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Simple App'});
});

router.get('/index2', function(req, res, next) {
  res.render('index2', { title: 'Simple App'});
});

module.exports = router;



