var express = require('express');
var app = express();
var loger = require('morgan');
/*
function myCustomStack(req,res,next){
    //функция прогоняет запросы через себя.для примера считываем заголовки, айпи
    console.log(req.header('user-agent'));
    console.log(req.ip);
    next();
}
*/
//app.use(myCustomStack);//for all
app.use(loger('dev'));

require('./routers/index.js')(app);

app.listen(3030,function(){
    console.log('Express starts on port 3030 successfully.');
});