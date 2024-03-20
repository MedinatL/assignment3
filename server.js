const http = require('http');
const fs = require('fs');
const path = require('path');

const booksDbPath = path.join(__dirname, "db", 'books.json');


const hostname = 'localhost';
const port = '8900';

function requestHandler(req, res){
  if (req.url === '/books' && req.method === 'GET') {
    getAllBooks(req, res);
} else if (req.url === '/books' && req.method === 'POST') {
    addBook(req, res);
} else if (req.url === '/books' && req.method === 'PUT') {
    updateBook(req, res);
} else if (req.url.startsWith('/books') && req.method === 'DELETE') {
    deleteBook(req, res);
} else {
    res.writeHead(404);
    res.end(JSON.stringify({
        message: 'Method Not Supported'
    }));
}

}



const server = http.createServer(requestHandler)

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });