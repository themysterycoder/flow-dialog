const rp = require('request-promise'); 

const availableFood = ['apple', 'egg', 'flour', 'salt', 'butter', 'milk', 'banana', 'chicken', 'beef', 'pork', 'tau pok'];
const foodApiOptions  = {
    uri : 'http://7b70246a.ngrok.io/search/apple chocolate',
    json: true,
  }

  const foodApiOptionsTwo  = {
    uri : 'http://7b70246a.ngrok.io/foodtofork/' + availableFood[Math.floor(Math.random()* (availableFood.length - 1))] + ' ' + availableFood[Math.floor(Math.random()* (availableFood.length - 1))],
    json: true,
  }
 

  rp(foodApiOptionsTwo).then((data) =>  {
    console.log(data);
  });