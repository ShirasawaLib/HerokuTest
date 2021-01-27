var http = require('http');
var fs = require('fs');
var info = require('./info.js');
 
var server = http.createServer(function(req, res) {
    var url = "views" + (req.url.endsWith("/") ? req.url + "index.html" : req.url);
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