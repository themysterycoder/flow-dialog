const express = require('express');
const aog = require('./dialogController');
const app = express();

app.use(app.json(), aog).listen(3000);