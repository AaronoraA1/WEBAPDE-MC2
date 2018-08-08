const mongoose = require("mongoose")


var userSchema = mongoose.Schema({    
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : [],
        required: true
    },    
    post: [{type: mongoose.Schema.Types.ObjectId, ref: 'post'}]
    
})

var User = mongoose.model("user", userSchema)

module.exports = {
    User
}