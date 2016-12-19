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

app.controller('cursosCtrl', function($scope, $http, $state) {
    $http.get('js/services/posts.json').
    success(function(data, status, headers, config) {
      $scope.json = data;
    }).
    error(function(data, status, headers, config) {});
});

app.controller('vocalsCtrl', function($scope, $http, ngAudio) {
    $http.get('js/services/posts.json').
    success(function(data, status, headers, config) {
      $scope.sound = []; // returns NgAudioObject
      $.each(data.vocales, function(index, value) {
        $scope.sound.push({'audio': ngAudio.load(value.audio), 'image': value.img})
      })
    })
});
