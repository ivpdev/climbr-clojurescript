var express = require('express');
var app = express();

app.get('/about', function (req, res) {
  res.send('climbr 0.0.1');
});

app.get('/', function (req, res) {
  res.send('Welcome to climbr');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});

app.use(express.static('game/resources/public'));