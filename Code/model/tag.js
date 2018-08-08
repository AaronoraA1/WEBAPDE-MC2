const mongoose = require("mongoose")


var postSchema = mongoose.Schema({
    
    title : {
        type : String,
        required : true
    },
    
    url: {
        type : String,
        required : true
    },
    author : {
        type: Array,
        items: userSchema
    },
    
    description:{
        type : String
    },
    
    privacy: {
        type: Boolean,
    },
    
    tags: {
        type: Array,
        items: tagSchema
    }
})

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
    post:{
        type: Array,
        items: postSchema
    }
    
})


var tagSchema = mongoose.Schema({
    
    name : {
        type: String,
        required : true
    },
//    title : String,
    author : {
        type: Array(),
        limit: 1,
        items: userSchema
}
})

var Tag = mongoose.model("tag", tagSchema)

module.exports = {
    Tag
}