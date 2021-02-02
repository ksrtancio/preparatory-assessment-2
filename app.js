const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');
    let urldir = './views/';

    if (req.url == '/'){
        urldir += 'index.html';
    }

    fs.readFile(urldir, (err, data) => {
        if (err){
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('listening');
});