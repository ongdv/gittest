var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var user = {
    id: 1,
    name: "okw",
    grade: "1234"
  }
  res.send(user);
});

module.exports = router;
