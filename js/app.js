var app = angular.module('angular', [
  'ui.router','ngAudio'
]);

app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html',
    })
    .state('vocales', {
      url: "/vocales",
      templateUrl: 'views/vocales.html',
    })
    .state('cursos', {
      url: "/cursos",
      templateUrl: 'views/cursos.html',
    })
});

app.controller('imagesCtrl', function($scope, $http, $state) {
    $http.get('js/services/posts.json').
    success(function(data, status, headers, config) {
      $scope.json = data;
    }).
    error(function(data, status, headers, config) {});
});
