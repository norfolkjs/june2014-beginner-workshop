var express = require('express'),
  app = express(),
  path = require('path'),
  compression = require('compression');

app.use(compression());

app.get('/hello', function (req, res) {
  res.send('Hello World');
});

var publicPath = path.join(__dirname, '/public');
app.use(express.static(publicPath));

app.post('/puppy', function (req, res) {
  res.send(201);
});

app.put('/puppy/:id', function (req, res) {
  res.send(201);
});

app.delete('/puppy/:id', function (req, res) {
  res.send(201);
});

app.listen(1337);
console.log('Listening on port 1337');
