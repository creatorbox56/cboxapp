var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var app = express();
const path = require('path');


app.use(express.static(path.join("/var/www/cboxapp/", 'build')));
app.use(express.urlencoded({extended: true, limit: '3mb'}));

app.get('/*', function(req, res){
  res.sendFile('/var/www/cboxapp/build' + '/index.html');
});
//http.createServer(app).listen(80);
//https.createServer(options, app).listen(443, console.log("Server running on port 443"));

https.createServer({
  key: fs.readFileSync('creatorbox_de.key'),
  cert: fs.readFileSync('creatorbox_de.crt')
}, app).listen(443, () => {
  console.log('Listening on Port 443...')
});
