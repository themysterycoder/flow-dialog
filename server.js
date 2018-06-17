const express = require('express');
//const aog = require('./dialogController');
const app = express();
const {dialogflow} = require('actions-on-google');
const rp = require('request-promise');


var aogApp = dialogFlow();

agoApp.intent('GetRecipe', conv => {
  conv.ask(`<speak>Jiak Simi?</speak>`);
});

app.use(app.json(), aogApp).listen(3000);