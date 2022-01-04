const http = require('http');

http.createServer((req, res)=> {
    res.end('hello')
}).listen(3001, ()=> {
    console.log('server started at port 3000');
});