var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '테스트 인덱스 확인' });
});

module.exports = router;
