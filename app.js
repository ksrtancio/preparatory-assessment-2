
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');
    let urldir = './views/';

    if (req.url == '/'){
        urldir += 'index.html';
    }else if (req.url == '/about'){
        urldir += 'about.html';
    }else if (req.url == '/contact'){
        urldir += 'contact.html';
    }else{
        urldir += '404.html';
    }

    // console.log(urldir);
    fs.readFile(urldir, 'utf8', (err, data) => {
        if (err){
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('HTTP server is up');
});