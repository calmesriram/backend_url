var admin_schema = require('../models/admin')
var master_schema = require('../models/master')

exports.test = (req,res)=>{
    res.json({"connection_status":"active"})
    res.end()
}

exports.signup = (req,res)=>{
    
    var admin_sch = new admin_schema({
        username:req.body.userid,
        password:req.body.password
    });

    // save
    admin_sch.save((err,data)=>{
    console.log(data);    
        console.log("success");
        res.json("success");
        res.end();
    })
}

exports.login = (req,res)=>{
    // save
    admin_schema.findOne({"username":req.body.userid, "password":req.body.password},{"password":0},(err,data)=>{
        if(data){
            res.json(data);
            res.end();
        }
        else{
            res.json(err)
            res.end();
        }

    })
}

exports.masterupload = (req,res)=>{
 var master_sch = new master_schema({
    "batchid" :req.body.batchid,
    "url" : req.body.url,
    "status":"NA"
 })
    // // save
    master_schema.find((err0,data0)=>{
        master_sch.sno = data0.length+1;
        master_sch.save((err,data)=>{
            if(data){
                res.json(data);
                res.end();
            }
            else{
                res.json(err)
                res.end();
            }
    
        })
    })

}

exports.assignurl = (req,res)=>{

    // var master_sc = new master_schema();
    // save
    // master_schema.find
    master_schema.findOneAndUpdate({"status":"NA"},{$set:{"agentid":req.body.agentid,"status":"AA","Date0":Date.now()}},(error,data)=>{
        admin_schema.findOneAndUpdate({"username":req.body.agentid},{$set:{"currentid":data["sno"]}},(error,datas)=>{
            if(datas){
                // datas
                res.json(data);
                res.end();
            }
            else{
                res.json(error)
                res.end();
            }
        })

    })
}

exports.agentstart = (req,res)=>{

    // save
    // master_schema.find
    master_schema.findOneAndUpdate({"sno":req.body.sno},{$set:{"Date1":Date.now()}},(error,data)=>{
        if(data){
            
            res.json(data);
            res.end();
        }
        else{
            res.json(error)
            res.end();
        }
    })
}

exports.agentcomplete = (req,res)=>{

    // save
    // master_schema.find
    master_schema.findOneAndUpdate({"sno":req.body.sno},{$set:{"status":"AC","Date2":Date.now()}},(error,data)=>{
        if(data){
            
            res.json(data);
            res.end();
        }
        else{
            res.json(error)
            res.end();
        }
    })
}

exports.adminhold = (req,res)=>{

    // var master_sch = new master_schema();
    // save
    // master_schema.find
    master_schema.updateMany({"batchid":req.body.batchid},{$set:{"status":"HD"}},(error,data)=>{

        if(data){
            res.json(data);
            res.end();
        }
        else{
            res.json(error)
            res.end();
        }
    })
}