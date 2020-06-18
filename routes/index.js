var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    aboutSection: {
      bgColour: "light",
      textColour: "dark",
      bgImage: "",
      sectionH2: "I’m here to help you",
      sectionP: "I know there is a lot to learn when it comes to the internet so I’m here to guide you through the whole journey. You’ll have personal contact with me the whole time and I will be happy to answer any questions you have. I also have varying levels of service after your website is finished so you can be sure you will never be left not knowing what to do next.",
      otherClasses: ""
    },
    secondSection: {
      bgColour: "light",
      textColour: "dark",
      bgImage: "",
      sectionH2: "I’m here to help you",
      sectionP: "Every business needs a website. When people are looking for something these days the first place they look is online. So what do people see when they search for you? This is where I come in. I can build you a high quality, responsive website for as little as $100. You can then take your website and you’re free to do whatever you want with it but if you need help with that I offer a few levels of service from as little as $10 per month. You can read more about my prices on my pricing page.",
      otherClasses: ""
    }
  });
});

module.exports = router;
