/*  app.js
    Hung Nguyen
    301294266 
    May 30
*/
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require('mongoose');
var contactListRouter = require("../routes/contact-list");
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportLocalMongoose = require('passport-local-mongoose');

var indexRouter = require("../routes/index");
var loginRouter = require("../routes/login");

let DB = require('./db');

mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

let mongoDB = mongoose.connection;

mongoDB.on('error', console.error.bind(console, 'Connection Error: '));
mongoDB.once('open', () => {
  console.log('Connected to MongoDB...');
});

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.static(path.join(__dirname, "../../node_modules")));

app.use(session({
  secret: "SomeSecret",
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

const User = require('../modules/userModel');

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use("/", indexRouter);

app.use("/contact-list", contactListRouter);
app.use("/login", loginRouter);

// app.get("/login", (req, res, next) => {
//     res.render("login", { title: "Login" });
// });

// app.post("/login", passport.authenticate("local", {
//   successRedirect: "../contact-list",
//   failureRedirect: "/login"
// }), function (req, res) {
 
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { title: "Error" });
});

module.exports = app;
