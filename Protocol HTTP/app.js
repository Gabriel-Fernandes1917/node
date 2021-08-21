var http = require('http'); // how module http is the nucle the node, you not need inform the location.

http.createServer(function(req, res){ /* function(req,res) to show one responser to your user */
    res.end("Hello, welcome to my server");
}).listen(8081); // 'createServer()' creat serve and 'listen()' to inform pot the serve.

console.log("The serve on !");