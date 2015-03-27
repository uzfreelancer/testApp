module.exports = function(app) {
    console.log('---index.js loaded success ---');
    var PostGre = app.get('PostGre');
    var userRouter = require('./users.js')(PostGre);


    app.get('/', function (req, res, next) {
        res.status(200).send({sucess: 'root folder'});
    });
    app.use('/user',userRouter);

}