var express = require('express');
var app = express();

app.get('/about', function (req, res) {
  res.send('climbr 0.0.1');
});

app.get('/', function (req, res) {
  res.render('index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.use(express.static('game/resources/public'));