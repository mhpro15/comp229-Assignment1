
let Contact = require("../modules/contact");




module.exports.displayHomePage = async(req, res, next) => {
  if (req.isAuthenticated()) {
    try {
      let contactList = await Contact.find();
      res.render("contact-list/list", { title: 'Business Contacts', contactList: contactList });
    } catch (err) {
      console.error(err);
    }
  }
  else {
    res.redirect("/login");
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
    res.redirect("/");
  } catch (err) {
    console.error(err);
  }
  
}

module.exports.displayUpdatePage = async (req, res, next) => {
  let id = req.params.id;
  try {
    let foundContact = await Contact.findOne({ _id: id });
    res.render("contact-list/update", {title: 'Update Contact', contact: foundContact});
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