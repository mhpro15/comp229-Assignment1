/*  index.js
    Hung Nguyen
    301294266 
    May 30
*/

var express = require("express");
var router = express.Router();

let businessContactsController = require("../controllers/contacts");

router.get("/", businessContactsController.displayHomePage);

router.post("/add", businessContactsController.processAddPage);

router.get("/update/:id", businessContactsController.displayUpdatePage);

router.post("/update/:id", businessContactsController.processUpdatePage);

router.get("/delete/:id", businessContactsController.processDeletePage);

module.exports = router;