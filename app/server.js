var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");



// Sets up the Express App
// =============================================================


var app = express();
var PORT = process.env.PORT || 3000;


//------------
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var apiRoutes = require('./routing/apiRoutes');
var htmlRoutes = require('./routing/htmlRoutes');
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//------------


// Sets up the Express app to handle data parsing

app.listen(PORT, function () {
  console.log("The app is listening on http://localhost:" + PORT);
});