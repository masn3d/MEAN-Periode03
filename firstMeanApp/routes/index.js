var express = require('express');
var model = require('./../model/jokes.js');
var router = express.Router();

/* GET home page.
 router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express' });
 });
 */


var cally = function () {
    console.log("hejhej");
}

router.get('/', function (req, res, next) {

    res.send('Use one of these REST APIs to get or add jokes: ' +
        '   api/jokes' +
        '   api/joke/:id' +
        '   api/joke/random' +
        '   api/deletejoke/:id' +
        '   api/addjoke')

    /*    model.allJokes(function (err, result) {
     if (err) {
     console.log("There was an error with allJoke");
     }
     else {
     console.log("This is the joke result: " + result);
     }
     });

     model.randomJoke(function (err, result) {
     if (err) {
     console.log("There was an error with randomJokes");
     }
     else {
     console.log("This is the random joke result: " + result);
     }
     });*/


});

module.exports = router;
