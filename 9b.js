('use strict');

const express = require('express');
const PORT = 3000;

const app = express();
app.use(express.json());

app.post('/9b', function (request, response) {
  console.log(request.body);
  if (!request.body) {
    return response.sendStatus(400);
  }
  response.json(request.body);
});

app.get('/9b', function (request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.listen(PORT);
