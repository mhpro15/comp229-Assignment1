/*  index.js
    Hung Nguyen
    301294266 
    May 30
*/
var express = require("express");
var router = express.Router();
let loginController = require("../controllers/login");
let passport = require("passport")

const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        return res.redirect("../contact-list");
    }
    else {
        return next();
    }
}
router.get("/" , isLoggedIn, loginController.displayLoginPage); 
router.post("/",loginController.procesLoginPage);

module.exports = router;