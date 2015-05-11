var express = require('express'),
    router = express.Router(),
    twitterController = require('../controllers/twitter-controller.js');

// Setup routers for get requests
router.route('/:tag')
  // Add headers
  .get(function (req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept");
     next();
  })
  .get(function(req, res, next) {
    // Extract hashtag from request parameters for search
    var hashtag = '#' + req.params.tag;
    console.log('Received request for tweets with tag: ' + hashtag);
    /* Call twitterController's getTweets() with hashtag as search
       parameter. Process the tweets and return them to the caller */
    twitterController.getTweets(hashtag, function(err, data, response) {
        if (err) {
          throw err;
        } else {
          var filteredTweets = twitterController.processTweets(data);
          res.json(filteredTweets);
        }
    });
  });

module.exports = router;
