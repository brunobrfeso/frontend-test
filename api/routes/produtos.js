var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Produto = mongoose.model('Produto');

mongoose.connect('mongodb://dbapi:hhhh00000@ds141697.mlab.com:41697/dbapi');

router.options('/', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET');
    next();

});

/* POST produtos page. */
router.post('/', function(req, res, next) {

  var limit = req.body.limit;

  res.header("Access-Control-Allow-Origin", "*");

  Produto
  .find({}).sort({ "date": -1 }).limit(limit)
  .then(data => {
    res.send(data);
  }).catch(err => {
    res.send('error');
  })

});

/* GET produtos page. */
router.get('/', function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");

  Produto
  .find({})
  .then(data => {
    res.send(data);
  }).catch(err => {
    res.send('error');
  })

});

module.exports = router;
