const express = require('express');
const mongoose = require('mongoose');

const app = express();
const api = require('./api');

app.set('port', (process.env.PORT || 8081));

app.use(express.json());
app.use('/api', api);

mongoose.connect('mongodb://localhost:27017/virtualstandups', { useNewUrlParser: true })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', function () {
    console.log('Connected to MongoDB')

    app.listen(app.get('port'), function () {
        console.log('API server listening on port ' + app.get('port') + '!')
    })
})