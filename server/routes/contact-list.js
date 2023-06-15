/*  contact-list.js
    Hung Nguyen
    301294266 
    May 30
*/

var express = require("express");
var router = express.Router();

let businessContactsController = require("../controllers/contacts");


const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

router.get("/", isLoggedIn, businessContactsController.displayHomePage);

router.get("/add", isLoggedIn, businessContactsController.displayAddPage);

router.post("/add", businessContactsController.processAddPage);

router.get("/update/:id",isLoggedIn, businessContactsController.displayUpdatePage);

router.post("/update/:id",isLoggedIn, businessContactsController.processUpdatePage);

router.get("/delete/:id",isLoggedIn, businessContactsController.processDeletePage);

module.exports = router;