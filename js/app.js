angular.module('abcApp', ['ngRoute','backand'])
.config(function (BackandProvider) {
      BackandProvider.setAppName('abcapp');
      //BackandProvider.setSignUpToken('0debf461-a02c-44b9-aa68-9eb66f1b23b7');
      //BackandProvider.setAnonymousToken('f071eb9c-327e-4ad2-9a0e-c60a6fba44ff');
  });
angular.module('abcApp', ['ngRoute','backand'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/main.html'
        })
        .when('/ingreso', {
            templateUrl: 'templates/ingreso.html'
        })
        .when('/cursos', {
            templateUrl: 'templates/cursos.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
angular.module('abcApp').controller(function SignInCtrl(Backand, $cookieStore) { // SignInCtrl.js
    $scope.signIn = function() {
      Backand.signin($scope.username, $scope.password)
      .then(
        function (response) {
          //Do good for the world
        },
        function (data, status, headers, config) {
          //handle error
        }
      );
    }
});
angular.module('abcApp').controller(function dataService($http, Backand) { //dataService.js
    var self = this;
    //get the object name and optional parameters
    self.getList = function(name, sort, filter) {
      return $http({
        method: 'GET',
        url: Backand.getApiUrl() + '/1/objects/' + name,
        params: {
          filter: filter || '',
          sort: sort || ''
        }
      });
    }
  });