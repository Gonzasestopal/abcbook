// SignInCtrl.js
  function SignInCtrl(Backand, $cookieStore) {
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
  }