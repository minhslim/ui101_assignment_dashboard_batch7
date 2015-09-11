'use strict';

angular.module('dashboard')
 .factory('authenticate', function($http){
    return{
    login: function($scope){
        $http.post('/api/login',
          {'username': $scope.user.userName, 'password': $scope.user.password})
        .then(function(){
          $state.go('root');
        });
        }
       };
});