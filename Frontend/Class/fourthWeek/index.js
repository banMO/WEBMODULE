const http = require('http');
cobst {parse} = require('querystring')
const httpServer = http.createServer((req, res) => {
    console.log(req.body);
    res.end('ok');
});
console.log("starving");
httpServer.listen(8080)