const mongoose =  require('mongoose');

mongoose.connect("mongodb+srv://mbenkhal:wE6RSx49o5Acx16x@cluster0-hajpn.mongodb.net/myprices?retryWrites=true&w=majority",{ useNewUrlParser: true })
.then(() => {
    console.log('Connected to myprices database');
})
.catch(() => {
    console.log('Connection failed to myprices database');
})

module.exports = mongoose;
