var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {

  User.find(function(err, result) {
    if (err) throw err;
    res.render('drivers', {
      title: 'Список водителей',
      users : result
    });
  });

});

router.route('/add')
    .get(function(req, res, next) {
      res.render('drivers/add', {
        title: 'Добавить водителя'
      });
    })
    .post(function(req, res, next) {

      var user = new User({
        name: req.body.name,
        age: req.body.age,
        photo: req.files.photo.name
      });

      user.save(function(err){
        if(err){
          res.render('drivers/add', {
            title: 'Добавить водителя',
            form: req.body,
            errors: err.errors
          });
        } else {
          res.redirect('.');
        }
      });
    });

router.param('user_id', function(req, res, next, user_id) {
  // find user by id
  User.findById(user_id, function(err, user) {
    if (user) {
      req.user = user;
    }
    next();
  });
});

router.route('/:user_id')
    .get(function(req, res) {
      res.render('drivers/view', {
        title: 'Просмотр профиля водителя',
        user: req.user
      })
    });

module.exports = router;
