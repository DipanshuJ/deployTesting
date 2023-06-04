const express = require('express')
const app = express()

require("dotenv").config({
    path: "./config.env"
})




app.use(express.json());


app.get("/", (req,res)=>{
    res.send("hello world")
})

app.get("/find", (req, res)=> {
    res.json({
        success: true
    })
})



app.listen(process.env.PORT, ()=>{
    console.log('server is running at '+ process.env.PORT);
})





