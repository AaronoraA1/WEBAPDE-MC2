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
    
    console.log("-------------------------------------------------------------")
    
    var i
    User.find().then((user)=>{
     console.log("----USER----")
        console.log(user)
  
    }, (err)=>{
        console.log("could not find user")
    })
    
    Post.find().then((post)=>{
        console.log("----POST----")
        console.log(post)

    }, (err)=>{
        console.log("could not find user")
    })
    
    Tag.find().then((tag)=>{
        console.log("----TAG----")
        console.log(tag)

    }, (err)=>{
        console.log("could not find user")
    })

        console.log("-------------------------------------------------------------")

    
    
   res.render("index.hbs")
})

app.get("/profile", urlencoder, (req,res) =>{    
    console.log("-------------------------------------------------------------")
    var i
    User.find().then((user)=>{
  
        console.log("----USER----")
        console.log(user)

    }, (err)=>{
        console.log("could not find user")
    })
    
    Post.find().then((post)=>{
        console.log("----POST----")
        console.log(post)
    }, (err)=>{
        console.log("could not find user")
    })
    
    Tag.find().then((tag)=>{
        console.log("----TAG----")
        console.log(tag)

    }, (err)=>{
        console.log("could not find user")
    })

 console.log("-------------------------------------------------------------")

    

    res.render("profile.hbs", {
        username: currentUserName.username
    })  
})

app.post("/delete" , urlencoder, (req,res)=>{
    
    Post.deleteAll();
    
})

app.post("/upload", urlencoder, (req,res) =>{
    
    var title = req.body.title
    var url = req.body.url
    
    
   var userThis = req.body.username
    
    
    
    var newPost = new Post({title, url})
   
    newPost.author = currentUserName
    
//    User.findOne({username : currentUserName.username}).then((user)=>{
//        console.log("FUCK YOU" + user)
//        user.post.push(newPost)
//        user.save(done)
//    }, (err)=>{
//        console.log("could not find user")
//    })
    
    console.log("FUCK U " + currentUserName)
   User.findOneAndUpdate({
        username : currentUserName.username
    }, {
        $push:{post: {newPost}}
    }).then((user)=>{
        console.log("UPDATED")
    }, ()=>{
        console.log("error")
    })
    
    console.log(newPost.author)
    newPost.save().then((post)=>{
    }), (err)=>{
        console.log("MALIII")
    }

     res.redirect("/profile")
    
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