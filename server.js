var express = require('express');
var app = express();
var loger = require('morgan');
var bodyParser = require('body-parser');



var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost/testApp');
db.on('error', function(){console.log('connection error:')});
db.once('open', function callback() {
    console.log("Connection to mainDB is success");
    //require('./config/dev.js');

    //app.use(CookieParser);
    app.use(loger('dev'));
    app.use(bodyParser.json({strict: false, limit: 1024*1024}));
    app.use(bodyParser.urlencoded({extended: false}));
    app.set('db',db);

    require('./routers/index.js')(app)
    app.listen(3030,function(){
        console.log('Express starts on port 3030 successfully.');
    });
});



//require('./routers/index.js')(app);

