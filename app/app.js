var express = require('express');
var app = express();

app.get('/about', function (req, res) {
  res.send('climbr 0.0.1');
});

app.get('/', function (req, res) {
  res.send('Welcome to climbr');
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('App listening on port ' + port);
});

app.use(express.static('game/resources/public'));