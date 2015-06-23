var express = require('express');
var router = express.Router();
var DriverModel = require('../models/driverModel');

/* GET users listing. */
router.get('/', function(req, res, next) {

  DriverModel.find(function(err, result) {
    if (err) throw err;
    res.render('drivers', {
      title: 'Список водителей',
      drivers: result
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

      var driver = new DriverModel({
        name: req.body.name,
        age: req.body.age,
        photo: req.files.photo ? req.files.photo.name : null
      });

      driver.save(function(err){
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

router.param('driver_id', function(req, res, next, driver_id) {
  // find user by id
  DriverModel.findById(driver_id, function(err, driver) {
    if (driver) {
      req.driver = driver;
    }
    next();
  });
});

router.route('/:driver_id')
    .get(function(req, res) {
      res.render('drivers/view', {
        title: 'Просмотр профиля водителя',
        user: req.driver
      })
    });

module.exports = router;
