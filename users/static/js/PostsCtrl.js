app.controller("PostsCtrl", function($scope, $http) {
  $http.get('posts.json').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});