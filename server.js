var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var router = express.Router();
var PORT = 3000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));



router.get('/',  function(req, res){
	res.render('index');
});








// Starts our server.
app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
