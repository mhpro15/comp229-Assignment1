const passport = require("passport");



let jwt = require('jsonwebtoken');
let DB = require('../config/db');

let userModel = require('../modules/userModel');
let User = userModel.User; // alias


module.exports.displayLoginPage = async (req, res, next) => {
    try {
        let foundUser = await User.findOne({ "username": "admin" }) 
        if (foundUser == null) {
                User.register(new User({ username: "admin" }), "password", (err, user) => {
                console.log("User registered");
            });
    }
    } catch (error) {
        console.error(error);
    }
    res.render("login", { title: "Login" });
}

module.exports.procesLoginPage = (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        // server err?
        if (err) {
            return next(err);
        }
        // is there a user login error?
        if (!user) {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            // server error?
            if (err) {
                return next(err);
            }

            const payload =
            {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email
            }

            const authToken = jwt.sign(payload, DB.Secret, {
                expiresIn: 604800
            });
            return res.redirect('/contact-list');
        });
    })(req, res, next);
}