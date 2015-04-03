/**
 * Created by SuperUser on 27.03.2015.
 */
var express = require('express');
var mongoose = require('mongoose');

var customRouter = function(db) {
    var UserScheme = new mongoose.Schema({
       userName:{
           first: String,
           last: {type:String, default:'Pupkin'}
       } ,
        age : {type: Number, default: 18}
    },{collection:'users'});

    var UserModel = db.model('user',UserScheme);

    var userRouter = express.Router();
    userRouter.post('/', function(req,res,next){
        var body = req.body;
        var user = new UserModel(body);
        user.save(function(err,_user){
            if(err) {
                console.log(err);
            }
            else
            {
               console.dir(_user);
                res.send('User was added');
            }
        });
    })

    return userRouter;
};
module.exports = customRouter;
