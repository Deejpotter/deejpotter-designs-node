var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    aboutSection: {
      bgColour: "primary",
      bgImage: "images/laptop-60-opacity.png",
      textColour: "dark",
      sectionH2: "Deej Potter Designs",
      sectionP: "Your own personal web designer. <br>Prices start at $100. <br><strong>Contact me now!</strong>",
      otherClasses: ""
    }
  });
});

module.exports = router;
