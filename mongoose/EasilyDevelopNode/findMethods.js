/**
 * Created by martins on 5/23/16.
 */
var User = require('./model/User.js');

//------------------------READ---------------------------

// get all the users
User.find({}, function (err, users) {
    if (err) throw err;

    // object of all the users
    console.log("-----------> All Users: " + users);
});

// get the user CodeKingSSZZ
User.find({ username: 'CodeKingSSZZ' }, function(err, user) {
    if (err) throw err;

    // object of the user
    console.log("-------------> Single User: " + user);
});

// get a user with ID of 1
User.findById('5742fd763541a67d104440ec', function(err, user) {
    if (err) throw err;

    // show the one user
    console.log( console.log("-------------> Single User by ID: " + user));
});

/*


//------------------------UPDATE---------------------------

// get a user with ID of 1
User.findById(1, function(err, user) {
    if (err) throw err;

    // change the users location
    user.location = 'uk';

    // save the user
    user.save(function(err) {
        if (err) throw err;

        console.log('User successfully updated!');
    });

});

User.findByIdAndUpdate(4, { username: 'starlord88' }, function(err, user) {
    if (err) throw err;

    // we have the updated user returned to us
    console.log(user);
});

//------------------------DELETE---------------------------

// get the user starlord55
User.find({ username: 'starlord55' }, function(err, user) {
    if (err) throw err;

    // delete him
    user.remove(function(err) {
        if (err) throw err;

        console.log('User successfully deleted!');
    });
});

// find the user with id 4
User.findOneAndRemove({ username: 'starlord55' }, function(err) {
    if (err) throw err;

    // we have deleted the user
    console.log('User deleted!');
});

// find the user with id 4
User.findByIdAndRemove(4, function(err) {
    if (err) throw err;

    // we have deleted the user
    console.log('User deleted!');
});
*/
