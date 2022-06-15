'use strict';

const express = require('express');
const handle404 = require('./error-handlers/404');
const handle500 = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const app = express();

const PORT = process.env.PORT || 3002;

app.use(logger);
// app.use(validator);

app.get('/person', validator, (req, res) => {
  let name = req.query.name;

  if(!name) {
    res.status(200).send('hello');
  } else {
    res.status(200).send(`Personal Greetings ${name}`);
  }
});

app.use('*', logger, validator, handle404, handle500);

module.exports = {
  app,
  start: app.listen(PORT, () => console.log(`running on port ${PORT}`)),
};