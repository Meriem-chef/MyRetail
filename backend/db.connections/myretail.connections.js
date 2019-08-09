const mongoose =  require('mongoose');

mongoose.connect("mongodb+srv://mbenkhal:wE6RSx49o5Acx16x@cluster0-hajpn.mongodb.net/myretail?retryWrites=true&w=majority",{ useNewUrlParser: true })
.then(() => {
    console.log('Connected to myretail database');
})
.catch(() => {
    console.log('Connection failed to myretail database');
})

module.exports = mongoose;