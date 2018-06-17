const express = require('express');
const aog = require('./dialogController.js')
const app = express();


app.use(app.json(), aog).listen(3000);