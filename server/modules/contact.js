/*  contact.js
    Hung Nguyen
    301294266 
    June 15
*/
let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String,
}, {
    collection: "businessContacts"
});

module.exports = mongoose.model('Contact', contactModel);