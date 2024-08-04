const http = require('http');
const server = http.createServer (function(req, res) {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.write("Hello World");
res.end();
})

const port = 3001;
server.listen(port, function() 
{
console.log("Server running on" + port); 
})