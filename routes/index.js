var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'I Wish' });
});

// GET byeByeTrump animation.
router.get('/byeByeTrump', function(req, res, next) {
  
})

module.exports = router;
