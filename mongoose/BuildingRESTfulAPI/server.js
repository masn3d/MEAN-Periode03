// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var logger = require('morgan');
var express = require('express');       // call express
var bodyParser = require('body-parser');
var restRoutes = require('./routes/api.js');
var mongoose = require('mongoose');

var app = express();                 // define our app using express

mongoose.connect('mongodb://localhost/test');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
app.use('/api', restRoutes);

// START THE SERVER
// =============================================================================

if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
        next(err);
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
