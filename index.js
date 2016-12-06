var express = require('express');
var app = express();

app.disable('trust proxy');

app.get('/', function (req, res) {
  res.send('Hello Byron!');
});

app.listen(3000, function () {
  console.log('Byron started at http://localhost:3000');
});
