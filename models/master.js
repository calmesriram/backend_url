var mongoose = require('mongoose');

var master = mongoose.Schema(
    {
      
        sno:Number,
        batchid:Number,
        url:String,
        status:String, //"NA","AA","AC","HD"
        Date0:String,
        Date1:String,
        Date2:String,
        agentid:String,
     
       }
     );
     
     var track= mongoose.model('master',master);
     
     module.exports = track;