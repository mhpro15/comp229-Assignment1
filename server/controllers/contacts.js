let Contact = require("../modules/contact");




module.exports.displayHomePage = async(req, res, next) => {
  try {
    let contactList = await Contact.find();
    res.render("contact-list/list", {title: 'Business Contacts', contactList: contactList});
  } catch (err) {
    console.error(err);
  }
}

module.exports.processAddPage = async (req, res, next) => {
  let newContact = Contact({
    "name": req.body.firstName + " " + req.body.lastName,
    "number": req.body.contactNumber,
    "email": req.body.email
  });
  try {
    await newContact.save();
    res.redirect("/contact-list");
  } catch (err) {
    console.error(err);
  }
  
}

module.exports.displayUpdatePage = async(req, res, next) => {
    res.render("contact-list/update", {title: 'Update'});
}

module.exports.processUpdatePage = async(req, res, next) => {
    res.redirect("/contact-list");
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