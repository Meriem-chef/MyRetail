const mongoose = require('mongoose');
const mongooseprice = require('../db.connections/myretail.connections');
var currentPrice = new mongoose.Schema({
    value: String,
    current_code: String
});

var myPriceSchema = new mongoose.Schema({
    product_id: String,
	current_price: currentPrice
});
module.exports = mongooseprice.model('MyPrice', myPriceSchema);