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

// Save Words
router.post('/words', function(req, res, next){
  var words = req.body;

  if(!words.english || !words.ukrainian){
    res.status(400);
    res.json({
      "error": "Bad Data"
    });
  } else {
    db.englishwords.save(words, function(err, words){
      if(err){
        res.send(err);
      }
      res.json(words);
    })
  }
})

module.exports = router;
