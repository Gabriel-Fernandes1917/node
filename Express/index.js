const express = require("express");

const app = express(); // const storege your express


app.get("/",function(req, res){ // create roads by your app.
    res.sendFile(__dirname + "/html/index.html");// '__dirname' to infor by my file here in the mesmo diretory "raiz".
})

app.get("/about", function(req, res){
    res.send("my page about");
})

app.get("/blog", function(req, res){
    res.send("Welcome my blog");
})

app.get('/hey/:name/:cargo', function(req, res){ // use '/:' to create params.
    //res.send(req.params) // req recebe variables.
    res.send("<h1>hello "+req.params.name+"</h1>"+"<h2>"+req.params.cargo+"</h2>") // to show only one params .name the param.
    //res.send("<h2>"+req.params+"</h2>"); you can use send only one time.
})


app.listen(8081, function(){
    console.log("Hello World");
}) // this need last line.