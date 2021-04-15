var express = require('express');
var config = require('config');
var mongoose = require('mongoose');

var app = express();
const PORT = config.get('port') || 3000;

app.use('/api/auth', require('./routes/auth'));

async function start() {
    try {
        await mongoose.mongo.connect(confif.get('mongoURL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    }
    catch (e) {
        console.log('ERROR' + e.message)
        
    }
}


app.listen(PORT, () => console.log('Server run! Port:', PORT));