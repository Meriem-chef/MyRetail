const express = require('express');
const bodyParser =  require('body-parser');
const mongoose = require('mongoose');
const MyPrice = require('../backend/models/myprice');
const MyProduct  = require('../backend/models/myproduct');
const app = express();


app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
})

app.put("/api/products/:prdId", (req,res,next) =>{
    console.log(req.body.Price);
    console.log(req.params.prdId);
    MyPrice.updateOne({"product_id": req.params.prdId}, {$set: {"current_price.value": req.body.Price} })
    .then(document =>{
        console.log("updated");
        console.log(document);
    });
});

app.get("/api/products/:prdId", (req,res,next) => {
    console.log(req.params.prdId);
    var prdId;
    var pr ;
    var currency;
    var title;
  
   
 
   MyPrice.find({"product_id": req.params.prdId})
   .then( price => {
        var strPrice = JSON.stringify(price, null, '\t');
        console.log(price);
        var obj = JSON.parse(strPrice);
        var first = obj[0];
        pr = first["current_price"]["value"];
        currency = first["current_price"]["currency_code"];
        return MyProduct.find({'product.available_to_promise_network.product_id': req.params.prdId});
   }).then(product => {
       console.log(pr);
        var strPrd = JSON.stringify(product, null, '\t');
        var objprd = JSON.parse(strPrd);
        var firstprd = objprd[0];
        title = firstprd.product.product_description.title;

        console.log(title);
        return res.status(200).json({
            id: req.params.prdId,
            name: title,
            current_price: {
                value: pr,
                currency_code: currency
            }
            
        });
        
   }).catch(result => {
       console.log(result);
   });
});

module.exports = app;

