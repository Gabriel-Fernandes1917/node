const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false}))
app.use(express.json())

app.get('/pagamento', function(req, res){
    res.render('pagamento');
});

app.get('/cad-pagamento', function(req, res){
    res.sendFile(__dirname+'/HTML/add-pagamento.html');
})

app.post('/add-pagamento', function(req, res){
    res.send("Name: "+ req.body.nome + " <br> Value: " + req.body.valor + "<br>")
} )


app.listen(8080);