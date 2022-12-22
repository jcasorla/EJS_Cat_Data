const express = require("express");
const app = express();
const path = require('path')
const request = require('request');
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');




app.get("/cars", (req, res) => {
   
  
   res.render('cars');
})
app.get("/cars/new", (req, res) => {
   
  
   res.render('form');
})



app.get("/cats", (req, res) => {
   
  
   res.render('cats');
})

app.get("/cats/scruffy", (req, res) => {
   var cat = {
      name: "Scruffy",
      url: "/yellow_cat.jpg",
      favorite_food: "Chiken",
      age: '3',
      sleeping: ["Street","Couch"]
   };
      
  
   res.render('one_cat', {cat: cat});
})

app.get("/cats/grumps", (req, res) => {
   var cat = {
      name: "Grumps",
      url: "/grey_cat.jpg",
      favorite_food: "Rats",
      age: '5',
      sleeping: ["Bed","Kitchen"]
   };
      
  
   res.render('one_cat', {cat: cat});
})


app.get("/pokemon", (req, res) => {
   request({
      uri: 'https://pokeapi.co/api/v2/pokemon/ditto',
      
    }).pipe(res);
})

app.get("/ip", (req, res) => {
   request({
      uri: 'http://ip-api.com/json/',
      
    }).pipe(res);
})


// app.get('*', function(req, res) {  res.render('index');});

app.get('*', (request, response) => {
   // response.send("Hello Express");
   response.sendFile('index.html', {
      root: path.join(__dirname, '/static')
  })
});


app.listen(8000, () => console.log("listening on port 8000"));
