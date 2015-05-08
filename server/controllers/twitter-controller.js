var Twit = require('twit'),
    Autolinker = require('autolinker'),
    config = require('../../config.js');

/* Converts the URL for a user profile image as returned from
   Twitter into a version with a larger image */
function processProfileImageUrl(url) {
  var re = /_normal/;
  return url.replace(re, '_bigger');
}

function TwitterController() {
  // Add Twit instance to twitterController instance
  this.twitter = new Twit({
    consumer_key: config.twitter.consumerKey,
    consumer_secret: config.twitter.consumerSecret,
    access_token: config.twitter.accessToken,
    access_token_secret: config.twitter.tokenSecret
  });
  // Number of tweets to be returned
  this.numTweets = config.app.numTweets;
}

/* Filters a tweets properties to the relevant ones
   The tweet body's URLs are processed using Autolinker.
   The twitter profile image URL is converted using
   processProfileImageUrl */
TwitterController.prototype.processTweet = function(tweet) {
  var controller = this;
  var filteredTweet = {
    screenName: tweet.user.screen_name,
    userName: tweet.user.name,
    body: Autolinker.link(tweet.text),
    profileImage: processProfileImageUrl(tweet.user.profile_image_url)
  };

  return filteredTweet;
};

/* Processes all tweets obtained from the Twitter API using
   processTweet() */
TwitterController.prototype.processTweets = function(tweets) {
  var filteredTweets = tweets.statuses.map(this.processTweet);

  return filteredTweets;
};

// Obtains tweets from Twitter using the Twit module
TwitterController.prototype.getTweets = function(hashtag, callback) {
  var numTweets = this.numTweets;
  this.twitter.get('search/tweets', { q: hashtag, count: numTweets }, callback);
};

module.exports = new TwitterController();
