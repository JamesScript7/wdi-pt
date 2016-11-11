var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');

app.use(
  bodyParser.urlencoded({ extended: true})
);
app.set('view engine', 'ejs');
app.use(express.static('./public'));

var contacts = [
  {
    name: "George",
    number: "555-5555",
    address: "123 whatever st"
  },
  {
    name: "Daniel",
    number: "888-8888",
    address: "321 I dont know st"
  }

];

app.get('/contacts', function(req, res){
  res.render('contacts', { contact: contacts })
})

app.get('/new_contact',function(req, res){
  res.render('new-contact')
})

app.post('/create', function(req, res){
  contacts.push(req.body)
  console.log(contacts);
  if (!req.body.name){
    console.log("I dont have have a name");
  }
  res.render('contacts', { contact: contacts })
})


app.listen(port, function() {
  console.log("Listening on port..." + port);
})
