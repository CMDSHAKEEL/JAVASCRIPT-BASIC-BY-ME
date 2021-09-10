var http = require('http')

http.createserver(function(req,res){

    res.end("welcome Shakeel in Node js")
}).listen(9800)