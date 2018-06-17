const {dialogflow} = require('actions-on-google');
const rp = require('request-promise');


var aogApp = dialogflow();

aogApp.intent('Default Welcome Intent - yes', conv => {
  conv.ask(`<speak>Jiak Simi?</speak>`);
});

aogApp.intent('Default Welcome Intent - no', conv => {
  conv.close(`<speak>Got it! See you soon! <audio src='https://actions.google.com/sounds/v1/human_voices/human_burp.ogg' /></speak>`);
});


modules.exports = aogApp;
