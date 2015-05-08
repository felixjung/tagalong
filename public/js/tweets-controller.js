angular.module('tagalong')
.controller('tweetsController', ['$http', '$scope', function($http, $scope) {
  // Array for storing tweets
  $scope.tweets = [];

  // Fetch tweets from API server
  $http.get('http://localhost:3001/search/sumup').success(function(data) {
    $scope.tweets = data;
  });
}]);
