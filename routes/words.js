var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://nazar:words@ds139847.mlab.com:39847/words', ['englishwords']);

router.get('/words', function(req, res, next){
  db.englishwords.find(function(err, englishwords){
    if(err){
      res.send(err);
    }
    res.json(englishwords);
  })
});

module.exports = router;
