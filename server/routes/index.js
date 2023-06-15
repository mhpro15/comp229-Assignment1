/*  index.js
    Hung Nguyen
    301294266 
    June 15
*/

var express = require("express");
var router = express.Router();
const passport = require('passport');

  
let indexController = require("../controllers/index");

/* GET home page. */
router.get("/", indexController.displayHomePage);

router.get("/home", indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

router.get("/contact", indexController.displayContactPage);

router.get("/logout", function(req, res){
    req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

module.exports = router;
