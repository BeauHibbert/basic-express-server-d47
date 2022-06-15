'use strict';

const express = require('express');
const handle404 = require('./error-handlers/404');
const handle500 = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const app = express();

const PORT = process.env.PORT || 3002;

app.use(logger);

app.get('/person', validator, (req, res) => {
  let name = req.query.name;
  res.status(200).send(`Personal Greetings ${name}`);
});

app.get('/person/:name', (req, res) => {
  let name = req.params.name;
  res.status(200).send(`Hello ${name}, from us personally`);
});

app.use('*', handle404);
app.use(handle500);

module.exports = {
  app,
  start: app.listen(PORT, () => console.log(`running on port ${PORT}`)),
};