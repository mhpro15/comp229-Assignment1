let content = require("../modules/content");


module.exports.displayHomePage =  (req, res, next) => {
  res.render("index", { ...content.homeContent,  displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayAboutPage =   (req, res, next) => {
  res.render('index', { ...content.aboutContent, displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayProjectsPage =   (req, res, next) => {
  res.render('index', { ...content.projectsContent, displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayServicesPage =   (req, res, next) => {
  res.render('index', { ...content.servicesContent, displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayContactPage =  (req, res, next) => {
  res.render("contact",{title: 'Contact Me', displayName: req.user ? req.user.displayName : ''});
}