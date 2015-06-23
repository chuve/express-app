var mongoose = require('../../helpers/mongoose.js');
var brandModel = require('./brandModel');

var AutoScheme = mongoose.Schema({
    brand: { type: mongoose.Schema.Types.ObjectId, required: true }
});

AutoScheme.methods.getBrand = function() {
    var query = brandModel.findById(this.brand);
    var promise = query.exec();
    return promise;
};

var AutoModel = mongoose.model('AutoModel', AutoScheme, 'autoModels');

module.exports = AutoModel;