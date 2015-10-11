
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
      templateUrl: 'static/templates/cursos.html',
      controller: 'MainCtrl'
    })

  $urlRouterProvider.otherwise('/');
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