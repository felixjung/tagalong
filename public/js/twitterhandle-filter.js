angular.module('tagalong')
.filter('screenNameFilter', function() {
  return function(screenName) {
    // Generate a tag with the user's twitter profile as URL
    var screenNameHref = '<a href="https://twitter.com/' + screenName +
      '" target="_blank">@' + screenName + '</a>';

    return screenNameHref;
  };
});
