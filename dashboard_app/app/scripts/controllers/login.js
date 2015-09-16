var app = angular.module("dbApp");

app.controller("login", function($scope, $http, $state) {
    $scope.key = function() {
        //alert('test');  
        $scope.one = {
            'opacity': '1'
        }
    };

    $scope.login = function() {

        var promise = $http.post('/api/login', {
            userName: $scope.userName,
            password: $scope.password
        });
        promise.then(function(response) {
            if (response.data.authentication === "success") {
                // Log the user in
                //console.log("login");

                $state.go("root");

            } else {
                // Not log the user in
                console.log("error");
            }
        }, function() {
            console.log("SORRY");
        });
    }

});