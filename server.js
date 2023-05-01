const express = require('express');
const path = require('path');
const app = express();
const https = require('https');
const fs = require('fs');

app.use(express.static(path.join("/var/www/cboxapp/", 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join("/var/www/cboxapp/", 'build', 'index.html'));
});

// we will pass our 'app' to 'https' server
https.createServer({
  key: fs.readFileSync('/root/cert/' + 'key.pem', 'utf8'),
  cert: fs.readFileSync('/root/cert/' + 'cert.pem', 'utf8')
}, app)
.listen(443);

//app.listen(80);