var express = require('express');
var router = express.Router();
var db = require('../helpers/mongo_connection.js');

/* GET users listing. */
router.get('/', function(req, res, next) {

  db.collection('users').find().toArray(function(err, result) {
    if (err) throw err;
    res.render('users', {
      title: 'Список водителей',
      users : result
    });
    db.close();
  });

});

router.route('/add')
    .get(function(req, res, next) {
      res.render('users/add', {
        title: 'Добавить водителя'
      });
    })
    .post(function(req, res, next) {
      var status = req.body.name.length;

      if (status) {
        db.collection('users').insert({
          'name': req.body.name
        }, function() {
          res.redirect('.');
          db.close();
        });
      } else {
        res.render('users/add', {
          title: 'Добавить водителя',
          error: 'Ошибка, поле не может быть пустым'
        });
      }
    });

module.exports = router;
