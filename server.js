const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join("/var/www/cboxapp/", 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join("/var/www/cboxapp/", 'build', 'index.html'));
});

app.listen(9000);