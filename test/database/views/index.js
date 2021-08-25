
const express = require('express');
const session = require('express-session');

const port = 3000;
var path = require('path');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'hrml');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.listen(port, ()=>{
    console.log('Serve is on "');
})
