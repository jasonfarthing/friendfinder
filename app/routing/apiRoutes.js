// * A GET route with the url `/api/friends`.This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`.This will be used to handle incoming survey results.This route will also be used to handle the compatibility logic.
var express = require("express");
var friends = require("../data/friends.js")

var app = express.Router();

app.get("/:friendChoice?", function (req, res) {
  var chosen = req.params.friendChoice;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }
    return res.json(false);
  }
  return res.json(friends);
});


module.exports = app;
