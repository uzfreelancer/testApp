module.exports = function(app) {
    console.log('---index.js loaded success ---');
    var db = app.get('db');
    var userRouter = require('./users.js')(db);


    app.get('/', function (req, res, next) {
        res.status(200).send({sucess: 'root folder'});
    });
    app.use('/user',userRouter);

}