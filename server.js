var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var app = express();
var dbconfig = require('./Dbconnection/config')


mongoose.Promise = global.Promise;

mongoose.connect(dbconfig.mongodbconnectionstring,{useNewUrlParser:true}).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

require('./Routes/routes')(app);
  var port = process.env.PORT || 3000;
app.listen(port);
console.log("server is listen",port);