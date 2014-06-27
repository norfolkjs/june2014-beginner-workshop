var express = require('express'),
  app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

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
