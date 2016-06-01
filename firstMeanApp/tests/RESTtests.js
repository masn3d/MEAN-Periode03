var request = require("request");
var expect = require("chai").expect;
var http = require("http");
var server;
var TEST_PORT = 3421;

var testJoke = "This is a not that funny joke!";

before(function (done) {

    var app = require('../app.js');
    server = http.createServer(app);
    server.listen(TEST_PORT, function () {
        done();
    });
});

describe("REST jokes API PERIODE3", function () {

    it("/api/joke/random", function (done) {

        var options = {
            url: "http://localhost:" + TEST_PORT + "/api/joke/random",
            method: "GET",
            json: true
        };

        request(options, function (error, res, body) {
            // console.log(body);
            //expect(body).to.not.be.null;
            //expect(body).to.be.not.undefined;
            done();
        });
    });

/*    it("/api/addjoke/", function (done) {

        var options = {
            url: "http://localhost:" + TEST_PORT + "/api/addjoke/",
            method: "POST",
            json: true,
            body: {newjoke: testJoke}
        }
        request(options, function (error, res, body) {
            expect(JSON.stringify(body)).to.be.equal('{"New joke added":"'+ testJoke +'"}');
            done();
        });
    });*/
});

after(function (done) {
    server.close();
    done();
});