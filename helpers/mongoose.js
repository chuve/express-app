var mongoose = require('mongoose'); //Mongoose provides a straight-forward, schema-based solution to modeling your application data and includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
var dbName = 'test'; // имя базы данных

// connect
mongoose.connect('mongodb://localhost:27017/' + dbName);

// define errors messages
mongoose.Error.messages.general.required = '{PATH} не может быть пустым';
mongoose.Error.messages.Number.min = '{PATH} не может быть меньше {MIN}';

module.exports = mongoose;