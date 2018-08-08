const mongoose = require("mongoose")

var tagSchema = mongoose.Schema({
    
    name : {
        type: String,
        required : true
    },
//    title : String,
    author : {
        
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user',
        required: true
    
    
    
}
})

var Tag = mongoose.model("tag", tagSchema)

module.exports = {
    Tag
}