module.exports = function(app) {
    console.log('---index.js loaded success ---');

    function myCustomStack(req,res,next){
        //функция прогоняет запросы через себя.для примера считываем заголовки, айпи
        console.log(req.header('user-agent'));
        console.log(req.ip);
        next();
    }

    function errorHandler(err, req, res, next) {
        console.log(err);
        res.status(200).send(err);

    };

    //app.use(errorHandler);//что б работало надо последней

    app.get('/', function (req, res, next) {
        //var err = new Error('MyCustomError');
        res.status(200).send({sucess: 'root folder'});
        //next(err);
        //next('string');
    });

    app.post('/test', myCustomStack, function (req, res, next) {
        res.status(200).send({sucess: 'test folder'});
        //next('string');
    });
    app.get('/test', myCustomStack, function (req, res, next) {
        res.status(200).send({sucess: 'test folder'});
        //next('string');
    });

    app.use(errorHandler);
}