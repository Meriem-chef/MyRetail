const mongoose = require('mongoose');
const mongooseproduct = require('../db.connections/myretail.connections');
var available = new mongoose.Schema({
    product_id: String
});
var productdesc =  new mongoose.Schema({
    title: String
});

var product = new mongoose.Schema({
    available_to_promise_network: available,
    product_description: productdesc
});

var myProductSchema = new mongoose.Schema({
    product: product
});

module.exports = mongooseproduct.model('MyProduct', myProductSchema);