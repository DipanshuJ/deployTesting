const express = require('express')
const app = express()
// const cloudinary = require('cloudinary').v2
// const connection = require('./database');
// const User = require('./model');
const bcrypt = require("bcryptjs")
// Configuration 

require("dotenv").config({
    path: "./config.env"
})
// cloudinary.config({
//     cloud_name: "dqzedyrjd",
//     api_key: "893584784264753",
//     api_secret: "iMFPUVQVuT0NF3gWF68RFehA9q8"
// });




app.use(express.json());


app.get("/", (req,res)=>{
    res.send("hello world")
})




app.listen(process.env.PORT, ()=>{
    console.log('server is running at '+ process.env.PORT);
})





