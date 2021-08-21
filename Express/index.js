const express = require("express");

const app = express(); // const storege your express


app.get("/",function(req, res){ // create roads by your app.
    res.send("Welcome in my app");
})

app.get("/about", function(req, res){
    res.send("my page about");
})

app.get("/blog", function(req, res){
    res.send("Welcome my blog");
})


app.listen(8081, function(){
    console.log("Hello World");
}) // this need last line.