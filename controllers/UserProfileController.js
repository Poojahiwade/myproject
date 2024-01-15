const routes = require("express").Router();
const jwt = require("jsonwebtoken")
const User = require("../models/Users")

routes.get("/", async(req, res)=>{
    // console.log(req.headers.authorization)
    let token =  req.headers.authorization;
    let obj = jwt.decode(token, "poohi")
    // console.log(obj)
    let _id =obj._id;
    let result = await User.find({_id : _id})
    // res.send({name : "pooja "})
    res.send({success : true, result : result[0]});
})  

module.exports = routes;