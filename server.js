var express = require('express');
const compression = require('compression');
var https = require('https');
var http = require('http');
var fs = require('fs');
var app = express();
const path = require('path');
var serveStatic = require('serve-static');

app.use(compression());
//app.use(express.static(path.join("/var/www/cboxapp/", 'build')));
app.use(serveStatic(path.join('/var/www/cboxapp/build','build')));
//var serve = serveStatic('/var/www/cboxapp/build', { index: ['index.html', 'index.htm'] });
app.use(serveStatic('/var/www/cboxapp/build', { index: ['index.html', 'index.htm'] }))
app.use(express.urlencoded({extended: true, limit: '3mb'}));

 app.get('/*', function(req, res, next){
  res.sendFile('/var/www/cboxapp/build' + '/index.html', function (err){


        if (err) {
          next(err);
      } else {
          //console.log('Sent:', fileName);
          next();
      }
 })

//res.serveStatic('/var/www/cboxapp/build', { index: ['index.html', 'index.htm'] });

 });
//http.createServer(app).listen(80);
//https.createServer(options, app).listen(443, console.log("Server running on port 443"));

https.createServer({
  key: fs.readFileSync('creatorbox_de.key'),
  cert: fs.readFileSync('creatorbox_de.crt')
}, app).listen(443, () => {
  console.log('Listening on Port 443...')
});
