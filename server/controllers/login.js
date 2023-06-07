const passport = require("passport");

const User = require('../modules/userModel');
module.exports.displayLoginPage = (req, res, next) => {
    // User.register(new User({ username: "admin" }), "password", (err, user) => {
    //     console.log("User registered");
    // });
    res.render("login", { title: "Login" });
}

module.exports.procesLoginPage =  
    passport.authenticate("local",{
        successRedirect: "../contact-list",
        failureRedirect: "/login"
    });
