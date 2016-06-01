var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var model = require('./../model/jokes.js');
//var model = require(path.join(__dirname, '/../', 'model', 'jokes.js'));
var REST = express.Router();

var jokeData;

REST.use(bodyParser.urlencoded({extended: false}));


REST.get('/joke/random', function (req, res, next) {

    model.randomJoke(function (err, result) {
        if (err) {
            console.log("There was an error with model call");
        }
        else {
            jokeData = result;
            res.send({joke: jokeData});
        }
    });

    //res.setHeader('Content-Type', 'application/json');
});

REST.get('/jokes', function (req, res, next) {

    model.allJokes(function (err, result) {
        if (err) {
            console.log("There was an error with model call");
        }
        else {
            jokeData = result;
            res.send({jokes: jokeData});
        }
    });
});

REST.get('/joke/:id', function (req, res, next) {
    model.findJoke(req.params.id, function (err, result) {
        if (err) {
            console.log("There was an error with model call");
        }
        else {
            jokeData = result;
            res.send({Thejoke: jokeData});
        }
    });
});

REST.get('/deletejoke/:id', function (req, res, next) {

    model.deleteJoke(req.params.id, function (err, result) {
        if (err) {
            console.log("There was an error with model call");
        }
        else {
            jokeData = result;
            res.send({jokes: jokeData});
        }
    });
});


REST.get('/addjoke', function (req, res, next) {

    res.render('addjoke', {
        jokeTypes: model.getJokeTypes()
    });
});

REST.post('/addjoke', function (req, res, next) {

    var newJoke = {joke: req.body.writtenjoke, type: req.body.checkboxes}

    model.addJoke(newJoke, function (err, result) {
        if (err) {
            console.log("There was an error with model call");
        }
        else {
            jokeData = result;
            res.send({jokeAdded: jokeData});
        }
    });

});


module.exports = REST;
