var app = angular.module("dbApp");

app.controller("login", function($scope, $http, $state,$cookieStore, authenticate) {
    $scope.key = function() {
        //alert('test');  
        $scope.one = {
            'opacity': '1'
        }
    };

    $scope.login = function() {
          $cookieStore.put("user",$scope.userName);
          $cookieStore.put("psw",$scope.password);

         // $scope.user = authenticate.getUser();
         // $scope.psw = authenticate.getUser();

         // authenticate.promise.then(function(response) {
         //     if (response.data.authentication === "success") {
         //         // Log the user in
         //         //console.log("login");

         //         $state.go("root");

         //     } else {
         //         // Not log the user in
         //         console.log("error");
         //     }
         // }, function() {
         //     console.log("SORRY");
         // });
        //authenticate.getUser()
       // console.log(authenticate.getUser());
    //     var promise = $http.post('/api/login', {
    //          userName: $scope.userName,
    //          password: $scope.password
    //      });
    //     promise.then(function(response) {
             if (authenticate.getUser() === "success") {
    //             // Log the user in
    //             //console.log("login");

                $state.go("root");

             } else {
                // Not log the user in
                console.log("error");
             }
        
    }

});