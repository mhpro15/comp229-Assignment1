/*  contacts.js
    Hung Nguyen
    301294266 
    June 15
*/
let Contact = require("../modules/contact");




module.exports.displayHomePage = async(req, res, next) => {
  if (req.isAuthenticated()) {
    try {
      let contactList = await Contact.find().sort({name:1});
      res.render("contact-list/list", { title: 'Business Contacts', contactList: contactList, displayName: req.user ? req.user.displayName : '' });
    } catch (err) {
      console.error(err);
    }
  }
  else {
    res.redirect("auth/login");
  }
}

module.exports.displayAddPage = async (req, res, next) => {
  res.render("contact-list/add", { title: 'Add Contact', displayName: req.user ? req.user.displayName : '' });
}

module.exports.processAddPage = async (req, res, next) => {
  let newContact = Contact({
    "name": req.body.name != null? req.body.name: req.body.firstName + " " + req.body.lastName,
    "number": req.body.contactNumber,
    "email": req.body.email
  });
  try {
    await newContact.save();
    res.redirect(req.body.name != null? "/contact-list":"/");
  } catch (err) {
    console.error(err);
  }
  
}

module.exports.displayUpdatePage = async (req, res, next) => {
  let id = req.params.id;
  try {
    let foundContact = await Contact.findOne({ _id: id });
    res.render("contact-list/update", {title: 'Update Contact', contact: foundContact, displayName: req.user ? req.user.displayName : ''});
  }
  catch (err) {
    console.error(err);
  }
}

module.exports.processUpdatePage = async (req, res, next) => {
  let id = req.params.id;
  let newContact = Contact({
    "_id": id,
    "name": req.body.name,
    "number": req.body.number,
    "email": req.body.email
  });
  try {
    await Contact.updateOne({ _id: id }, newContact);
    res.redirect("/contact-list");
  } catch (err) {
    console.error(err);
  }
}

module.exports.processDeletePage = async (req, res, next) => {
  let id = req.params.id;
  try {
    await Contact.deleteOne({ _id: id });
    
  } catch (err) {
    console.error(err);
  }
  
  res.redirect("/contact-list");
}