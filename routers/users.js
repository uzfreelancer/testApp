/**
 * Created by SuperUser on 27.03.2015.
 */
var express = require('express');
var customRouter = function(PG) {
    var userRouter = express.Router();

    var User = PG.Model.extend({
        tableName: 'users'
    });

    var  knex = PG.knex;

    var UserCollection = PG.Collection.extend({
        model: User
    });

    userRouter.get('/', function (req, res, next) {
       /*
       User
            .fetchAll()
            .then(function(_user){
                res.status(201).send(_user);
            })
            .otherwise(next);
        */
        // read knexjs.org !!!!! можливі варіанти query
        UserCollection
            .forge()
            /*.query(function(qb){
                qb.where({user_name: 'pupkin3'})
            } )*/
            //.query('where',{user_name: 'pupkin3'})
            //.query('where','user_name','=', 'pupkin2')
            .fetch()
            .then(function(_user){
                res.status(201).send(_user);
            })
            .otherwise(next);
        //res.status(200).send({success: "user get"});
    });
/*
    userRouter.get('/:userId', function (req, res, next) {
        //витягаємо одного юзера
        var userId =  req.params.userId;

        User
            .forge({id: userId})
            //.query('where',{user_name: 'pupkin3'})
            //.query('where','user_name','=', 'pupkin2')
            .fetch()
            .then(function(_user){
                res.status(201).send(_user);
            })
            .otherwise(next);
        //res.status(200).send({success: "user get"});
    });
    */
    userRouter.get('/:username', function (req, res, next) {
        //витягаємо одного юзера
        var username =  req.params.username;
        // query through knex equal knex().raw('select * from users user_name = ? AND age >= ?',[username, 20])
        knex('users')
            .select()
            .where('user_name','=', username)
            .limit(10)
            .then(function(_user){
                res.status(201).send(_user);
            })
            .otherwise(next);
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
    userRouter.put('/:userId', function (req, res, next) {
        // update user po id
        var data = req.body;
        var userId = req.params.userId;

        var user = new User({id: userId});
        user
            .save(data, {patch:true})
            .then(function(_user){
                res.status(201).send(_user);
            })
            .otherwise(function(err){
                res.status(500).send(err);
            }); //promise
    });
    userRouter.delete('/:userId', function (req, res, next) {
        // delete  user po id
        var userId = req.params.userId;
        var user = new User({id: userId});
        user
            .destroy()
            .then(function(){
                res.status(201).send(userId + ' user removed');
            })
            .otherwise(function(err){
                res.status(500).send(err);
            }); //promise
    });

    return userRouter;
};
module.exports = customRouter;
