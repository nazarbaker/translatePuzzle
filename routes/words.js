var express = require('express');
var router = express.Router();

router.get('/words', function(req, res, next){
  res.send('Words API');
});

module.exports = router;
