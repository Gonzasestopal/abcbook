
var app = angular.module('angular', [
  'ui.router'
]);

app.constant('BASE_URL', 'http://localhost:8000/api/alumnos');

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: '/static/templates/main.html',
      controller: 'MainCtrl'
    })
    .state('ingreso', {
      url: "/ingreso",
      templateUrl: 'static/templates/ingreso.html',
      controller: 'MainCtrl'
    })
    .state('vocales', {
      url: "/vocales",
      templateUrl: 'static/templates/vocales.html',
      controller: 'MainCtrl'
    })
    .state('cursos', {
      url: "/cursos",
      templateUrl: 'static/templates/cursos.html',
      controller: 'MainCtrl'
    })

  $urlRouterProvider.otherwise('/');
});

app.controller('imagesCtrl', function ($scope, $http) {
    $http.get('../static/js/posts.json').
    success(function(data, status, headers, config) {
      $scope.json = data;
    }).
    error(function(data, status, headers, config) {});
    var pass = [];
    $scope.imageId = function(index){
      pass.push($scope.json.images[index].id);
      if (pass.length >= 4) {
        console.log(pass);
        var str = pass.join();
        console.log(str);
        angular.forEach($scope.json.pass, function(value, key){
          console.log(key + ': ' + value);
        });
      };
    };
});

app.controller('MainCtrl', function($scope, Alumnos, $state){
  $scope.Alumno = {};
  $scope.Alumno = function() {
    Alumnos.addOne($scope.newAlumno)
      .then(function(res){
        // redirect to homepage once added
        $state.go('main');
    });
  };
    Alumnos.all().then(function(res){
      $scope.alumnos = res.data;
  });
});

app.service('Alumnos', function($http, BASE_URL){
  var Alumnos = {};

  Alumnos.all = function(){
    return $http.get(BASE_URL);
  };

  Alumnos.update = function(updatedAlumno){
    return $http.put(BASE_URL + '/' + updatedAlumno.id, updatedAlumno);
  };

  Alumnos.delete = function(id){
    return $http.delete(BASE_URL + '/' + id);
  };

  Alumnos.addOne = function(newAlumno){
        return $http.post(BASE_URL, newAlumno)
    };

  return Alumnos;
});