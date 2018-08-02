/* IMPORTS */
const express = require("express")
const mongoose = require("mongoose")
const hbs = require("hbs")
const bodyparser = require("body-parser")
const path = require("path")
const {Post} = require("./model/post.js")
const {User} = require("./model/user.js")

/* SETUP */
const app = express()
const urlencoder = bodyparser.urlencoded({
    extended: false
})


mongoose.Promise = global.Promise
mongoose.connect ("mongodb://localhost:27017/Memes",{
     useNewUrlParser: true
})
app.set("view-engine", "hbs")
app.use(express.static(__dirname+'/public'));



/* ROUTES */
app.get("/" , urlencoder, (req,res) =>{
    res.render("index.hbs")
})

app.post("/register", urlencoder, (req,res) =>{
    var username = req.body.username
    var password = req.body.password
    
    var newUser = new User({username, password})
    
    newUser.save().then((user)=>{
        console.log( user.username + "Logged")
        res.render("index.hbs")
    }), (err)=>{
        console.log("MALIII")
        
    }

})


/* LISTEN */
app.listen(3000)
console.log("Listening")