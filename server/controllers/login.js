const passport = require("passport");

const User = require('../modules/userModel');
module.exports.displayLoginPage = async (req, res, next) => {
    let foundUser = await User.findOne({ "username": "admin" }) 
    console.log(foundUser);
    if (foundUser == null) {
            User.register(new User({ username: "admin" }), "password", (err, user) => {
                console.log("User registered");
            });
        
    }
    res.render("login", { title: "Login" });
}

module.exports.procesLoginPage =  
    passport.authenticate("local",{
        successRedirect: "../contact-list",
        failureRedirect: "/login"
    });
