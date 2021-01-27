const http = require('http');
const fs = require('fs');
const info = require('./info.js');
 
const server = http.createServer(function(req, res) {
    const url = "views" + (req.url.endsWith("/") ? req.url + "index.html" : req.url);
    if (fs.existsSync(url)) {
      fs.readFile(url, (err, data) => {
        if (!err) {
          res.writeHead(200, {"Content-Type": info.getType(url)});
          res.end(data);
        }
      });
    }
})
 
server.listen(process.env.PORT);