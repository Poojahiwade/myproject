require("../config/db")
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name : String,
    username : String,
    password : String,
    // repassword : String,
    contact :String,
    state : String,
    city : String,
    address : String,
    gender : String
})

module.exports = mongoose.model("user", UserSchema);