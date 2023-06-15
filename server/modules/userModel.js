/*  userModel.js
    Hung Nguyen
    301294266 
    June 15
*/

var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema( {
        username: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
        },
        /*
        password: 
        {
            type: String,
            default: '';
            trim: true,
            required: 'password is required'
        }
        */
       email: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'email address is required'
       },
       displayName: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'Display Name is required'
       },
       created: 
       {
            type: Date,
            default: Date.now
       },
       update: 
       {
            type: Date,
            default: Date.now
       }
    },
    {
        collection: "users"
    });

// configure options for User Model

let options = ({ missingPasswordError: 'Wrong / Missing Password'});

UserSchema.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', UserSchema);