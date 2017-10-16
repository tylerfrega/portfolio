var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var nodemailer = require("nodemailer");
var app = express();
var router = express.Router();
var PORT = process.env.PORT || 3000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));



router.get('/',  function(req, res){
	res.render('index');
});


app.post('/contact', function (req, res) {
 
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'tylerfregaWebDev@gmail.com', // Your email id
        pass: '' // Your password
    }
});

var mailOptions = {
  from: req.body.email, 
  to: 'tylerfregaWebDev@gmail.com', 
  subject: 'Email from ' + req.body.email, 
  text: req.body.messege 
  
};
console.log(req.body)
transporter.sendMail(mailOptions, function(error, info){
  if(error){
      console.log(error);
      console.log(res.json({yo: 'error'}));
  }else{
      console.log('Message sent: ' + info.response);
      //res.render('index');
      
  };
});

});




// Starts our server.
app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
