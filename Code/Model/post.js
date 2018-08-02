const mongoose = require("mongoose")

var postSchema = mongoose.Schema({
    
    title : {
        type : Date,
        required : true
    },
//    title : String,
    author : String,
    tags : String
    
})

var Post = mongoose.model("post", postSchema)

module.exports = {
    Post
}