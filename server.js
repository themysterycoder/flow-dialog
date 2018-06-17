const express = require('express');
//const aog = require('./dialogController');
const app = express();
const bodyparser = require('body-parser');
const {dialogflow} = require('actions-on-google');
const rp = require('request-promise');


const aogApp = dialogflow();

aogApp.intent('Default Welcome Intent - yes', conv => {
  conv.ask(`<speak>Jiak Simi?</speak>`);
});

aogApp.intent('Default Welcome Intent - no', conv => {
  conv.close(`<speak>Got it! See you soon! <audio src='https://actions.google.com/sounds/v1/human_voices/human_burp.ogg' /></speak>`);
});

const PORT = process.env.PORT || 3000;

app.use(bodyparser.json(), aogApp).listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);});