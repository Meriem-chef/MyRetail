const mongoose =  require('mongoose');

mongoose.connect(process.env.MONGODB,{ useNewUrlParser: true })
.then(() => {
    console.log('Connected to myretail database');
})
.catch(() => {
    console.log('Connection failed to myretail database');
})

module.exports = mongoose;