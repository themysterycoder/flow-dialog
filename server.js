const express = require('express');
const aog = require('./dialogController');
const app = express();
const bodyparser = require('body-parser');
const {dialogflow} = require('actions-on-google');
const rp = require('request-promise');

app.get('/hello', function(req,res){
  res.send('Welcome to MasterChef');
})

const PORT = process.env.PORT || 3000;

app.use(bodyparser.json(), aog).listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);});