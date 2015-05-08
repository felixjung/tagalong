angular.module('tagalong')
.directive('tweetList', function() {
  /* Return a directive for a single tweet linking it to
     the tweetsController */
  return {
    restrict: 'E',
    templateUrl: 'templates/tweets.html',
    controller: 'tweetsController',
    controllerAs: 'tweetsCtrl'
  };
});
