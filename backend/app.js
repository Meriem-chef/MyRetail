const express = require('express');
const bodyParser =  require('body-parser');
const mongoose = require('mongoose');
const MyPrice = require('./models/myprice');
const MyProduct  = require('./models/myproduct');
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

app.put("/products/:prdId", (req,res,next) =>{
    console.log(req.body.Price);
    console.log(req.params.prdId);
    MyPrice.updateOne({"product_id": req.params.prdId}, {$set: {"current_price.value": req.body.Price} })
    .then(document =>{
        if(document.n === 0){
            res.status(200).json({message: "record not found"});
        }else{
            console.log("updated");
            console.log(document);
            res.status(200).json({message: "record updated"});
        }
    });
});

app.get("/products/:prdId", (req,res,next) => {
    var prdId;
    var pr ;
    var currency;
    var title;
   MyPrice.findOne({"product_id": req.params.prdId})
   .then( price => {
       console.log(price);
       if(!price)  {
            return res.status(200).json({
                message: "No products found in Myprice DB"
            });
        }
        var strPrice = JSON.stringify(price, null, '\t');
        var obj = JSON.parse(strPrice);
        var first = obj;
        pr = first["current_price"]["value"];
        currency = first["current_price"]["currency_code"];
        return MyProduct.findOne({'product.available_to_promise_network.product_id': req.params.prdId});
   }).then(product => {
        if(!product) {
            return res.status(200).json({
                message: "No products found in Myproduct DB"
            });
        }
        var strPrd = JSON.stringify(product, null, '\t');
        var objprd = JSON.parse(strPrd);
        var firstprd = objprd;
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

