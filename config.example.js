// Fill in app credentials and rename to config.js
var config = {
  twitter: {
    consumerKey: '',
    consumerSecret: '',
    accessToken: '',
    tokenSecret: '',
    baseUrl: 'https://api.twitter.com/',
    tokenPath: 'oauth2/token'
  },
  app: {
    numberOfTweets: 30
  }
};

module.exports = config;
