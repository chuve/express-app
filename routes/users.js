var express = require('express');
var router = express.Router();
var connection = require('../helpers/mongo_connection.js');

/* GET users listing. */
router.get('/', function(req, res, next) {

  connection.db.collection('users').find().toArray(function(err, result) {
    if (err) throw err;
    res.render('users', {
      title: 'Список водителей',
      users : result
    });
    console.log(result);
  });

});

router.get('/add', function(req, res, next) {
  res.render('users/add', {
    title: 'Добавить водителя'
  });
});

module.exports = router;
