const mongoose = require("mongoose")

var userSchema = mongoose.Schema({
    
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String
    }    
})

var User = mongoose.model("user", userSchema)

module.exports = {
    User
}