let content = require("../modules/content");


module.exports.displayHomePage =  (req, res, next) => {
  res.render("index", content.homeContent);
}

module.exports.displayAboutPage =   (req, res, next) => {
  res.render('index', content.aboutContent);
}

module.exports.displayProjectsPage =   (req, res, next) => {
  res.render('index', content.projectsContent);
}

module.exports.displayServicesPage =   (req, res, next) => {
  res.render('index', content.servicesContent);
}

module.exports.displayContactPage =  (req, res, next) => {
  res.render("contact",{title: 'Contact Me'});
}