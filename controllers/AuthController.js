const routes = require("express").Router();
const User = require("../models/Users")
const sha1 = require("sha1")
const jwt = require("jsonwebtoken")

routes.post("/", async(req, res)=>{
    let {username, password} = req.body
    // console.log(req.body)
    let result = await User.find({username : username})
    // console.log(result)
    if(result.length == 1)
    {
        if(result[0].password == sha1 (password))
        {
            let obj = { _id : result[0]._id}
            let token = jwt.sign(obj, "poohi")
            // console.log(token)
            res.send({ success : true, token : token})
        }
        else{
            res.send({ success : false, type : 2})
        }
    }
    else{
        res.send({ success :false, type : 1})
    }
})
module.exports = routes;