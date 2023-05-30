/*  index.js
    Hung Nguyen
    301294266 
    May 30
*/

var express = require("express");
var router = express.Router();

let content = require("../modules/content");
  

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", content.homeContent);
});

router.get("/home", function (req, res, next) {
  res.render("index", content.homeContent);
});
/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('index', content.aboutContent);
});
/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', content.projectsContent);
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', content.servicesContent);
});

router.get("/contact", function (req, res, next) {
  res.render("contact",{title: 'Contact Me'});
});

module.exports = router;
