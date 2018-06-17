const express = require('express');
//const aog = require('./dialogController');
const app = express();
const bodyparser = require('body-parser');
const {dialogflow} = require('actions-on-google');
const rp = require('request-promise');


const aogApp = dialogflow();

agoApp.intent('GetRecipe', conv => {
  conv.ask(`<speak>Jiak Simi?</speak>`);
});

app.use(bodyparser.json(), aogApp).listen(3000);