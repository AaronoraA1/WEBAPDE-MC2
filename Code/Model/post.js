
const mongoose = require("mongoose")





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
    },
    post:{
        type: Array(),
        limit: 1,
        items: postSchema
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

var Post = mongoose.model("post", postSchema)

module.exports = {
    Post
}