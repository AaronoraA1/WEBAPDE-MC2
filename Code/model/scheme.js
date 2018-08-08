const mongoose = require("mongoose")


var tagSchema = mongoose.schema({
    
    name : {
        type : String,
        required : true
    },

    author : {
        type: [userSchema],
        required: true
    }
})


var userSchema = mongoose.Schema({
    
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required: true
    },    
    post: {
        type: [postSchema]
    }
})




var postSchema = mongoose.Schema({
    
    title : {
        type : String,
        required : true
    },
    date:{
        type: Date
    },
    url: String, 
//    title : String,
    author : String,
    tags : {
        type: [tagSchema]
    }
    
})



var User = mongoose.model("user", userSchema)
var Tag = mongoose.model("tag", tagSchema)
var Post = mongoose.model("post", postSchema) 

module.exports = {
    Post,
    Tag,
    User
}