const express = require("express");

const app = express();
app.use(express.static(__dirname +'/assets'));


app.get("/home", function(req, res){ //road
    res.sendFile(__dirname+"/html/index.html");
    
})

app.get("/home/:name", function(req, res){
    res.send(" <h1> Welcome my site "+req.params.name+"</h1>");
})





app.listen(8081,function(){
    console.log("Servidor On in URL http://localhos:8081");
});