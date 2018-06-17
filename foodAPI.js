
var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes.js");
var unirest = require('unirest');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var server = app.listen(3001, function () {
    console.log("app running on port.", server.address().port);
});



app.get("/", function (req, res) {
    res.status(200).send({ message: 'Welcome to our receipe API' });
  });

app.get("/search", function (req, res) {
  var query = "nasi goreng banana strawberry orange"
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/queries/analyze?q="+query)
    .header("X-Mashape-Key", "q8uYrjiCPLmshI8TQk0qosulmuFQp1L4q4Zjsnn0Vs9cW9QjG5")
    .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
    .end(function (result) {
      console.log();
      res.status(200).send(result.body);
  });

});
app.get("/search/:query", function (req, res) {
  var query = req.params.query;
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/queries/analyze?q="+query)
    .header("X-Mashape-Key", "q8uYrjiCPLmshI8TQk0qosulmuFQp1L4q4Zjsnn0Vs9cW9QjG5")
    .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
    .end(function (result) {
      console.log();
      res.status(200).send(result.body);
  });

});

app.get("/foodtofork/:query", function (req, res) {
  var query = req.params.query;
  unirest.get("http://food2fork.com/api/search?key=57dec7057f5c1217a0a892e9c867dea6&q="+ query)
    .end(function (result) {
      console.log();
      res.status(200).send(result.body);
  });

});


app.get('/fruit/:fruitName&:fruitColor', function(request, response) {
   const name = request.params.fruitName
   const color = request.params.fruitColor
});
