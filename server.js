const express = require('express');
const app = express();

app.use(express.json());

app.get('/', function(request, response){
  //console.log(request.body);      // your JSON
   response.send('Welcome to Sous Chef');    // echo the result back
});

app.listen(3000);