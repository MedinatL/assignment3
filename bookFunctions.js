const http = require('http');
const fs = require('fs');
const path = require('path');




function getAllBooks(req, res) {
    fs.readFile(booksDbPath, "utf8", (err, data) => {
        if (err) {
            console.log(err)
            res.writeHead(400)
            res.end("An error occured")
        }

        res.end(data)
    })
}
