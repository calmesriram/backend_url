var mongoose = require('mongoose');

var admin = mongoose.Schema(
    {
        username:String,
        password:String,
        currentid:Number,
        roles:{
        type:String,
        default:"NA"
        }
        
       }
     );
     
     var adminuser= mongoose.model('admin',admin);
     
     module.exports = adminuser;