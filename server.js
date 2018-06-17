const express = require('express');
//const aog = require('./dialogController');
const app = express();
const bodyparser = require('body-parser');
const {dialogflow} = require('actions-on-google');
const rp = require('request-promise');


const aogApp = dialogflow();

aogApp.intent('GetRecipe', conv => {
  conv.ask(`<speak>Jiak Simi?</speak>`);
});

const PORT = process.env.PORT || 3000;

app.use(bodyparser.json(), aogApp).listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);});