var db = require('../db/db');
var ObjectId = require('mongodb').ObjectID;
var ran = require("random-js")();

var jokeTypes = [
    'alcohol',
    'blind',
    'foot',
    'joke',
    'short',
    'riddle',
    'quote'
];

function _getJokeTypes(){
    return jokeTypes;
}

function _allJokes(callback) {

    var collection = db.get().collection('jokes');
    collection.find().toArray(function (err, results) {
        if (err) {
            callback(err);
        } else if (results.length) {
            // there was a result
            callback(null, results);
        } else {
            console.log("No documents found");
            callback(err);
        }
    });
};

function _findJoke(id, callback) {

    var collection = db.get().collection('jokes');
    collection.findOne({_id: new ObjectId(id)}, function (err, doc) {
        if (err) {
            callback(err);
        } else {
            callback(null, doc);
        }
    });
}

function _addJoke(jokeToAdd, callback) {

    var collection = db.get().collection('jokes');
    collection.insert(jokeToAdd, function (err, doc) {
        if (err) {
            callback(err);
        } else {
            callback(null, doc);
            console.log("Joke successfully added");
        }
    });
}

function _randomJoke(callback) {

    var collection = db.get().collection('jokes');
    collection.find().toArray(function (err, results) {
        if (err) {
            callback(err);
        } else if (results.length > 0) {
            // there was at least one result.

            var result = results[ran.integer(0, results.length - 1)].joke;

            callback(null, result);
        } else {
            console.log("No jokes found");
            callback(err);
        }
    });
};

var _deleteJoke = function (id, callback) {
    var collection = db.get().collection('jokes');
    collection.deleteOne({_id: new ObjectId(id)}, function (err, results) {
        if (err) {
            callback(err);
        } else
            callback(null, 'This joke was deleted: ' + results);
    });
};


/*
 exports.editJoke = function(jokeToEdit,callback) { .. };
 */

module.exports = {
    allJokes: _allJokes,
    findJoke: _findJoke,
    addJoke: _addJoke,
    randomJoke: _randomJoke,
    deleteJoke: _deleteJoke,
    getJokeTypes: _getJokeTypes
}