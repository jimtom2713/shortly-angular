angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(link) {
    $scope.link.url = link;
    Links.addLink($scope.link)
      .then(function(link){
        //do something 
      });
  };
});
