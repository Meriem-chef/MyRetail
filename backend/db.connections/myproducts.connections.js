const mongoose =  require('mongoose');

mongoose.connect("mongodb+srv://mbenkhal:wE6RSx49o5Acx16x@cluster0-hajpn.mongodb.net/myproducts?retryWrites=true&w=majority",{ useNewUrlParser: true })
.then(() => {
    console.log('Connected to myproducts database');
})
.catch(() => {
    console.log('Connection failed to myproducts database');
})

module.exports = mongoose;