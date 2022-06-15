'use strict';

require('dotenv').config();
const server = require('./src/server');
const PORT = process.env.PORT || 3002;


server.start();
