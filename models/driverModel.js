/**
 * Driver Model
 * @type {mongoose|exports}
 */
var mongoose = require('../helpers/mongoose.js');

var DriverrScheme = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 22, required: true },
    photo: { type: String }
});
var DriverModel = mongoose.model('DriverModel', DriverrScheme);

/**
 * Custom validation
 */

//DriverModel.schema.path('name').validate(function (value) {
//    return value.length >= 4;
//}, 'Имя не может быть короче 4 символов');
//
//DriverModel.schema.path('age').validate(function (value) {
//
//});

module.exports = DriverModel;