module.exports = function(app) {
    console.log('---index.js loaded success ---');
    var PostGre = app.get('PostGre');
    var User = PostGre.Model.extend({
        tableName: 'users'
    });

    app.get('/', function (req, res, next) {
        res.status(200).send({sucess: 'root folder'});
    });
    app.post('/user', function (req, res, next) {
        var data = req.body;

        var user = new User(data);
        user
            .save()
            .then(function(_user){
                res.status(201).send(_user);
            })
            .otherwise(function(err){
                res.status(500).send(err);
            }); //promise

        //res.status(200).send({sucess: 'root folder'});
    });

}