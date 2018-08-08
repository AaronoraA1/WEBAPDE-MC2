const mongoose = require("mongoose")


var postSchema = mongoose.Schema({
    
    title : {
        type : Date,
        required : true
    },
    url: String, 
//    title : String,
    author : String,
    tags : [{type: mongoose.Schema.Types.ObjectId, ref: 'tag'}]
})

var Post = mongoose.model("post", postSchema)

module.exports = {
    Post
}