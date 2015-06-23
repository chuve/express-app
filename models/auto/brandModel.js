var mongoose = require('../../helpers/mongoose');

var BrandScheme = new mongoose.Schema({
    name: { type: String, require: true },
    models: { type: Array }
});

var BrandModel = mongoose.model('AutoBrand,', BrandScheme, 'brandModels');

module.exports = BrandModel;