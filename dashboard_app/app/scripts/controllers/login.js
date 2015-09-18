var app = angular.module("dbApp");

app.controller("login", function($scope, $http, $state, $cookieStore, authenticate) {
    $scope.key = function() {
        //alert('test');  
        $scope.one = {
            'opacity': '1'
        }
    };
    $scope.reminder = true;
    $scope.login = function() {
        $cookieStore.put("user", $scope.userName);
        $cookieStore.put("psw", $scope.password);
        if (authenticate.getUser() === "success") {
            // Log the user in
            //console.log("login");
            $state.go("root.work");

        } else {
            // Not log the user in
            $scope.reminder = !$scope.reminder;
            console.log("error");
        }
    }

});