/**
 * Created by SuperUser on 27.03.2015.
 */
var express = require('express');
var customRouter = function(PG) {
    var userRouter = express.Router();

    var User = PG.Model.extend({
        tableName: 'users'
    });

    userRouter.get('/', function (req, res, next) {
        User
            .fetchAll()
            .then(function(_user){
                res.status(201).send(_user);
            })
            .otherwise(next);

        //res.status(200).send({success: "user get"});
    });

    userRouter.post('/', function (req, res, next) {
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

    return userRouter;
};
module.exports = customRouter;
