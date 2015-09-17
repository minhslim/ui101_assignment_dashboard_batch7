'use strict';
angular.module('dbApp')
    .controller('login', function($scope, $http, $state) {
        $scope.login = function() {
            $http.post('/api/login', {
                    userName: $scope.userName,
                    password: $scope.password
                })
                .success(function(response) {
                    $state.go('root/work');
                    console.log(response);
                })
                .error(function(response) {
                    $scope.msgtxt = 'error Username or Password!';
                    $scope.password = "";
                    $state.go('login');
                });
        };
    });
