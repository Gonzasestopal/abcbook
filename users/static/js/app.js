
var app = angular.module('angular', [
  'ui.router','ngAudio'
]);

app.constant('BASE_URL', 'http://localhost:8000/api/alumnos');

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: '/static/templates/main.html',
      controller: 'MainCtrl'
    })
    .state('login', {
      url: "/login",
      templateUrl: 'static/templates/login.html',
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
    .state('add-alumno', {
      url: "/add",
      templateUrl: 'static/templates/add_alumno.html',
      controller: 'MainCtrl'
    });
  $urlRouterProvider.otherwise('/');
});

app.controller("mp3Ctrl",function($scope,ngAudio){
    $scope.sound = ngAudio.load("static/audio/audio_a.mp3"); // returns NgAudioObject
    $scope.sound = ngAudio.load("static/audio/audio_e.mp3");
    $scope.sound = ngAudio.load("static/audio/audio_i.mp3");
    $scope.sound = ngAudio.load("static/audio/audio_o.mp3");
    $scope.sound = ngAudio.load("static/audio/audio_u.mp3");
})  

app.controller('imagesCtrl', function($scope, $http, $state) {
    $http.get('../static/js/posts.json').
    success(function(data, status, headers, config) {
      $scope.json = data;
    }).
    error(function(data, status, headers, config) {});
    var pass = [];
    $scope.imageId = function(index){
      pass.push($scope.json.images[index].id);

      if (pass.length >= 4) {
        var str = pass.join("");
        if (str == 1235) {
          swal("Bienvenido!", "", "success")
          $state.go('cursos');

        }
        else {
          swal("Usuario equivocado", "Ingresa correctamente tu usuario!", "error")
          pass.length = 0;
        }
      }
    };
});

app.controller('MainCtrl', function($scope, Alumnos, $state){
  $scope.newAlumno = {};
  $scope.addAlumno = function() {
    Alumnos.addOne($scope.newAlumno)
      .then(function(res){
        // redirect to homepage once added
        $state.go('main');
    });
  };

  $scope.deleteAlumno = function(id){
    Alumnos.delete(id);
    // update the list in ui
    $scope.alumnos = $scope.alumnos.filter(function(todo){
      return alumno.id !== id;
    })
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