const http = require('http');
const fs = require ('fs');

const host = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  let path = './';

  if (req.url === '/') {
    path += 'index.html';
  } else if (req.url === '/about') {
    path += 'about.html';
  } else if (req.url === '/contact-me') {
    path += 'contact-me.html';
  } else {
    path += '404.html';
  }

  fs.readFile(path, (err, data) => {
    if (err) {
        res.writeHead(404, {'Content-Type': 'text-plain' });
        res.end(data);
    } else {
      res.writeHead(200, {'Content-Type': 'text-html' });
      res.end(data);
    }
  })
});

server.listen(port, host, () => {
  console.log(`Server Running at http://${host}:${port}`)
});