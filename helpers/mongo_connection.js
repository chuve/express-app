var dbName = 'test';
var db = require('mongoskin').db('mongodb://localhost:27017/' + dbName);

module.exports = db;