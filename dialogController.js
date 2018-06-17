const {dialogflow} = require('actions-on-google');
const rp = require('request-promise'); 


var aogApp = dialogflow();
const foodApiOptions  = {
  uri : 'http://7b70246a.ngrok.io/foodtofork/apple chocolate',
  json: true,
}
aogApp.intent('Default Welcome Intent - yes', conv => {
  rp(foodApiOptions).then((data)=>{
    conv.ask(`<speak></speak>`);});
});

aogApp.intent('Default Welcome Intent - no', conv => {
  conv.close(`<speak>
  <par>
    <media xml:id="text1" begin="0.0s">
      <speak>Two brothers, in a van.</speak>
    </media>
    <media xml:id="sound1" begin="text1.end-0.2s" fadeOutDur="1.0s">
      <audio
        src="https://actions.google.com/sounds/v1/transportation/tires_squeal_continuous.ogg" clipBegin="30.0s" clipEnd="34.0s"/>
    </media>
    <media xml:id="text2" begin="sound1.end-1.0s">
      <speak>And then a meteor hit.</speak>
    </media>
    <media xml:id="sound2" begin="text2.end-0.2s" fadeOutDur="2.0s">
      <audio
        src="https://actions.google.com/sounds/v1/weapons/big_explosion_cut_off.ogg" clipEnd="3.0s"/>
    </media>
    <media xml:id="text3" begin="sound2.end-1.0s">
      <speak>And ran as fast as they could.</speak>
    </media>
    <media xml:id="sound3" begin="text3.end-0.2s" fadeOutDur="2.0s">
      <audio
        src="https://actions.google.com/sounds/v1/foley/running_on_tile.ogg" clipEnd="3.0s"/>
    </media>
    <media xml:id="text4" begin="sound3.end-1.0s">
      <speak>From giant cat monsters.</speak>
    </media>
    <media xml:id="sound4" begin="text4.end-0.2s" fadeOutDur="2.0s">
      <audio
        src="https://actions.google.com/sounds/v1/horror/aggressive_zombie_snarls.ogg" clipEnd="3.0s"/>
    </media>
    <media xml:id="text5" begin="sound4.end-1.0s">
      <speak>And then a giant tornado came.</speak>
    </media>
    <media xml:id="sound5" begin="text5.end-0.2s" fadeOutDur="2.0s">
      <audio
        src="https://actions.google.com/sounds/v1/weather/thunder_crack.ogg" clipEnd="3.0s"/>
    </media>
    <media xml:id="text6" begin="sound5.end-1.0s">
      <speak><emphasis level="strong">And thats when things got knocked into twelfth gear!</emphasis></speak>
    </media>
    <media xml:id="sound6" begin="text6.end-0.2s" fadeOutDur="2.0s">
      <audio
        src="https://actions.google.com/sounds/v1/transportation/muscle_car_driving_skid_out.ogg" clipEnd="7.0s" clipBegin="2.0s"/>
    </media>
    <media xml:id="background" soundLevel="-5.0dB" repeatCount="10"
      fadeInDur="0.5s" fadeOutDur="2.0s" begin="0.0s" end="sound6.end+1.0s">
      <audio
        src="https://actions.google.com/sounds/v1/weather/rain_on_car_heavy.ogg"/>
    </media>
  </par>
</speak>`);
  //conv.close(`<speak>Got it! See you soon! <audio src='https://actions.google.com/sounds/v1/human_voices/human_burp.ogg' /></speak>`);
});


module.exports = aogApp;
