/* IMPORTS */
const express = require("express")
const mongoose = require("mongoose")
const hbs = require("hbs")
const bodyparser = require("body-parser")
const path = require("path")

/* SETUP */
const app = express()
const urlenconder = bodyparser.urlencoded({
    extended: false
})
app.set("view-engine", "hbs")
app.use(express.static(__dirname+'/public'));



/* ROUTES */
app.get("/", (req,res) =>{
    res.render("index.hbs")
})


/* LISTEN */
app.listen(3000)
console.log("Listening")