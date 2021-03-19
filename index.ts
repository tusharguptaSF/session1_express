const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const api = require('/api');
const app = express();
app.use('/home',express.static(path.join(__dirname,'public')));


app.use(bodyparser.urlencoded({extended:false}));

// Default Route to validate
app.use((req,res,next) => {
    console.log("Gettig the Request");
    next();
},(req,res,next) => {
    if(req.get("token") === "jwttoken"){
        next();
        const users = [{
            id:1,
            name:"AAA",
            age:30
        },
        {
            id:2,
            name:"bbb",
            age:40
        }]
    }else{
       next(401);
    }
})
//localhost:8001/api/users
app.use('/api',api);


// Exporting the app
module.exports = app;


