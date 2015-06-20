/**
 * User Model
 * @type {mongoose|exports}
 */
var mongoose = require('../helpers/mongoose.js');

var UserScheme = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 22, required: true },
    photo: { type: String }
});
var User = mongoose.model('User', UserScheme);

/**
 * Custom validation
 */

//User.schema.path('name').validate(function (value) {
//    return value.length >= 4;
//}, 'Имя не может быть короче 4 символов');
//
//User.schema.path('age').validate(function (value) {
//
//});

module.exports = User;