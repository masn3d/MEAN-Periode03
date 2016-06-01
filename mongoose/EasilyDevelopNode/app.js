var User = require('./model/User.js');

var martin = new User({
    name: 'MartinSN',
    username: 'CodeKingSSZZ',
    password: 'linux45'
});


martin.herofy(function(err, name){
    if (err) throw err;

    console.log("Your name has been changed to: " + name);
});

martin.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully!');
});


