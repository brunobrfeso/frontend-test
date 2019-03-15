var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Produto = mongoose.model('Produto');

mongoose.connect('mongodb://dbapi:hhhh00000@ds141697.mlab.com:41697/dbapi');

router.options('/', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST');
    next();

});

/* POST insert-produto page. */
router.post('/', function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");

  var produto = new Produto();
  produto.title = req.body.title;
  produto.slug = req.body.slug;
  produto.price = req.body.price;
  produto.img = req.body.img;
  produto.date = req.body.date;
  produto.description = req.body.description;
  produto.escritor = req.body.escritor;
  produto.cover = req.body.cover;
  produto.penciller = req.body.penciller;
  produto.active = req.body.active;
  produto.fblink = req.body.fblink;
  produto.twlink = req.body.twlink;
  produto.tags = req.body.tags;
  produto.imprint = req.body.imprint;
  produto.rating = req.body.rating;
  produto.format = req.body.format;
  produto.upc = req.body.upc;  
  produto.save()
  .then(x => {
    res.send('sucesso');
  }).catch(err => {
    res.send('error');
  })

});

module.exports = router;
