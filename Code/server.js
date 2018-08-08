/* IMPORTS */
const express = require("express")
const mongoose = require("mongoose")
const hbs = require("hbs")
const bodyparser = require("body-parser")
const path = require("path")
//const{Schema} = require("./model/scheme.js")
const{Tag} = require(("./model/tag.js"))
const{Post} = require(("./model/post.js"))
const{User} = require(("./model/user.js"))
 




/* SETUP */
const app = express()
const urlencoder = bodyparser.urlencoded({
    extended: false
})


var currentUserName;


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

app.get("/profile", urlencoder, (req,res) =>{
    console.log("showing profile for " + currentUserName)
    res.render("profile.hbs", {
        username: currentUserName.username
    })  
})

app.post("/register", urlencoder, (req,res) =>{
    console.log("register")
    var username = req.body.username
    var password = req.body.password
   
 
    
    var newUser = new User({username,password})
    
    newUser.save().then((user)=>{
        console.log( user.username + "Logged")
        currentUserName = user
        res.redirect("/profile")
    }), (err)=>{
        console.log("MALIII")
        
    }

})

app.post("/login", urlencoder, (req,res) => {
    var userName = req.body.username

    console.log("login")
    User.findOne({username : userName}).then((user)=>{
       currentUserName = user
       console.log("YA BOI's USERNAME " + currentUserName.username)
       res.redirect("/profile")
    }, (err)=>{
        console.log("could not find user")
        res.redirect("/")
    })
    
    
})

app.get("/logout", urlencoder, (req,res) => {
    
    
    console.log( currentUserName+ " has logged out")
    currentUserName = null;
    res.redirect("/")
    
})


/* LISTEN */
app.listen(3000)
console.log("Listening")