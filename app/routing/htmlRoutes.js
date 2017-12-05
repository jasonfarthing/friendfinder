// * A GET Route to `/survey` which should display the survey page.
// * A default, catch-all route that leads to `home.html` which displays the home page. 
var express = require("express");
var path = require("path");

var app = express.Router();



//route for Home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
//route for Survey page  
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });


module.exports = app;