var express = require("express");
var router = express.Router();


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { 
    greeting: "Welcome to my portfolio!",
  title: "Home",
  content: ["Here, you will find a showcase of my skills, projects, and experiences in the field of software engineering. I invite you to explore and learn more about me and my work.","I am dedicated to delivering high-quality software solutions and leveraging cutting-edge technologies to create innovative and user-centric applications. My goal is to contribute to the advancement of technology and make a positive impact in the digital world."]
} );
});

router.get("/home", function (req, res, next) {
  res.render("index",{ 
    greeting: "Welcome to my portfolio!",
  title: "Home",
  content: ["Here, you will find a showcase of my skills, projects, and experiences in the field of software engineering. I invite you to explore and learn more about me and my work.","I am dedicated to delivering high-quality software solutions and leveraging cutting-edge technologies to create innovative and user-centric applications. My goal is to contribute to the advancement of technology and make a positive impact in the digital world."]
} );
});
/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('index', {
    greeting: "About Me",
    title: 'About',
    content:["Please find my detailed resume in PDF format for a comprehensive overview of my education, skills, and professional experience. You can download it here: "] ,
  });
});
/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', {
    greeting: "What I do in my free time:",
    title: 'Projects',
    project: ["Simon - Color Sequence Game","Recipe Search","Discord Bot with OpenAI API","Resume Website","Photovoltaic Power Calculator"],
    content: ["The game challenges the player to remember and repeat a sequence of colors displayed on the screen. The game showcases the ability to create interactive websites using HTML, CSS, and JavaScript, and also highlights the ability to implement logic and problem-solving skills in my code.",
      "This project is a simple React component that allows users to search for recipes based on the ingredients they have. The component uses the Edamam Recipe Search API to retrieve the recipe information. This project demonstrates the proficiency in using React to create dynamic and interactive web applications and the ability to integrate APIs into my code.",
      "This project is a Discord Bot that uses OpenAI's Artificial Intelligence Platform to provide users with automated responses to their queries. The bot is designed to understand natural language and respond to user input in a conversational manner. It can provide answers to questions, provide helpful advice, and even generate creative content. With OpenAI's powerful AI capabilities, this bot is sure to provide an engaging and interactive experience for users.",
      "Developed a personal resume website using Next.js and Tailwind CSS to showcase my skills, projects, and work experience. Designed and implemented a responsive user interface that highlights my strengths and experience, leveraging the powerful styling capabilities of Tailwind CSS. Integrated Next.JS dynamic routing and server-side rendering to create a seamless browsing experience for potential employers. Implemented SEO best practices to improve search engine rankings and increase visibility. Developed and deployed the website to showcase my portfolio and provide an online presence for my professional profile.",
      "Developed a web application that calculates the power output of a photovoltaic system based on the user's input. The application uses the National Renewable Energy Laboratory's PVWatts API to retrieve the power output data. The application is built using React and Bootstrap and is deployed on Heroku."],
    website:["https://mhpro15.github.io/colorgame/","https://mhpro15.github.io/recipe/","https://github.com/mhpro15/bot","https://resume-mhpro15.vercel.app ","https://mhpro15.github.io/apitesting"]
  });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { 
    greeting: "What I can offer:",title: 'Services', content:["Front-end Development: Building modern and responsive websites tailored to your requirements.","Back-end Development: Creating robust and scalable web applications with a focus on security and performance.","API Development: Building RESTful APIs to allow your applications to communicate with each other."] });
});
module.exports = router;
