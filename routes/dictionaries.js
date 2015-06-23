var express = require('express');
var router = express.Router();

router.get('/brands', function(req, res, next) {
   res.render('dictionaries/brands', {
      title: 'Марки автомобилей'
   });
});

module.exports = router;