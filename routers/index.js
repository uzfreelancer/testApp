module.exports = function(app) {
    var path = require('path');
    console.log('---index.js loaded success ---');
    var db = app.get('db');
    var userRouter = require('./users.js')(db);


    app.get('/', function (req, res, next) {
        res.sendFile(path.join(__dirname,'../index.html'));
    });
    app.use('/user',userRouter);

}