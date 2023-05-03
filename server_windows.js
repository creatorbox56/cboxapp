const express = require('express');
const path = require('path');
const app = express();
const https = require('https');
const fs = require('fs');


/* app.use(express.static(path.join("C:\Users\Resa\Documents", 'build')));

app.get('/*', function (req, res) {
  //res.sendFile(path.join("C:\Users\Resa\Documents\Visual Studio 2017\p5example", 'build', 'index.html'));

  res.sendFile('index.html', { root: "C:\Users\Resa\Documents\build"});
}); */

// we will pass our 'app' to 'https' server
 app.get('/', (req, res) => {
    res.send('Hello World');
});

https.createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
  passphrase: 'Start1234$'
}, app)
.listen(3000); 
//app.listen(80);
