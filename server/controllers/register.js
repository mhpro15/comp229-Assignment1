const passport = require("passport");
let DB = require('../config/db');

let userModel = require('../modules/userModel');
let User = userModel.User; 

module.exports.displayRegisterPage = async (req, res, next) => {
    res.render("auth/register", { title: "Register", displayName: req.user ? req.user.displayName : ''});
}

module.exports.processRegisterPage = (req, res, next) => {
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayName
    });
    User.register(newUser, req.body.password, (err) => {
        if (err) {
            if (err.name == "UserExistsError") {
                console.error("Error: User Already Exists");
            }
            else {
                console.error("Error: " + err);
            }
            req.flash('registerMessage', 'Registration Error');

            return res.redirect('/register');
            }
            else if(req.body.password != req.body.password2){
                req.flash('registerMessage', 'Passwords do not match');
                return res.redirect('/register');
            }

        // after successful registration - login the user
        return passport.authenticate('local')(req, res, () => {
        return res.redirect('/contact-list');
        });
       
    });
}