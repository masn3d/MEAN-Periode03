/**
 * Created by martins on 5/23/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var id = mongoose.id

mongoose.connect('mongodb://localhost/test');

userSchema = new Schema({
    name: String,
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    admin: Boolean,
    location: String,
    meta: {
        age: Number,
        website: String
    },
    created_at: Date,
    updated_at: Date
});

userSchema.methods.herofy = function () {
    // add some stuff to the users name
    this.name = this.name + '-The Hero';
    return this.name;
};

// on every save, add the date
userSchema.pre('save', function (next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});

var User = mongoose.model('User', userSchema);

module.exports = User;