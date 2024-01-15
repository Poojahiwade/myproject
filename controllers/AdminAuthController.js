const routes = require("express").Router();
const Admin= require("../models/Admin")
const sha1 = require("sha1")
const jwt = require("jsonwebtoken")

routes.post("/", async(req,res)=>{
    let {username, password} = req.body;
    // console.log(req.body)
    // print username and password in nodemon
    let result = await Admin.find({username : username})
    // console.log(result) 
    // empty array in nodemon
    if(result.length >=1)
    {
        if(result[0].password == sha1(password))
        {
            let obj = { _id : result[0]._id } 
            let token = jwt.sign(obj, "hiwade")
            res.send({ success : true, token : token })
        }
        else
        {
            res.send({success : false, type : 2})
        }
    }
    else
    {
        res.send({success : false, type : 1})
    }
    // res.send({success : true})
})

module.exports=routes;