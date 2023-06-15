/*  register.js
    Hung Nguyen
    301294266 
    June 15
*/
var express = require("express");
var router = express.Router();
let registerController = require("../controllers/register");
let passport = require("passport")

const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        return res.redirect("../contact-list");
    }
    else {
        return next();
    }
}

router.get("/" ,isLoggedIn, registerController.displayRegisterPage); 
router.post("/",registerController.processRegisterPage);

module.exports = router;