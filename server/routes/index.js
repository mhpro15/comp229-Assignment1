/*  index.js
    Hung Nguyen
    301294266 
    May 30
*/

var express = require("express");
var router = express.Router();


  
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

module.exports = router;
