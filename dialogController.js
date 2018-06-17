const {dialogflow} = require('actions-on-google');
const rp = require('request-promise');


const aogApp = dialogFlow();

agoApp.intent('GetRecipe', conv => {
  conv.ask(`<speak>Jiak Simi?</speak>`);
});


modules.exports = aogApp;
