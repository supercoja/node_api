var express = require("express");
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cats');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var cats = require('./routes/cat.js')(app);

var server = app.listen(3002,function(){
console.log('Server running at http://127.0.0.1:3000/');
});

/*
var r = require('request').defaults({
   json: true
})

module.exports = function(app){

/*
 Read 
*/

/*
 app.get('/pets',function(req, res){
     r({uri:'http://localhost:3001/dog'}, function(error, response, body) {
         if (!error && response.statusCode==200){
             res.json(body);
         } else {
             res.send(response.statusCode);
         }
     });
   });
};


*/