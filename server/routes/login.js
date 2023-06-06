/*  index.js
    Hung Nguyen
    301294266 
    May 30
*/
var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.render("login", { title: "Login" });
}
);

module.exports = router;