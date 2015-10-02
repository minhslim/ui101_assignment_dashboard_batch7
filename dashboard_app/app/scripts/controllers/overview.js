var app = angular.module("dbApp");

app.controller("overview", function($scope, $http,$cookieStore) {
    var user = $cookieStore.get("user");
    //console.log(user);

 $http.get('/api/profile').then(function(response){
    $scope.liste = response.data.profiles;
   
    
    if($scope.liste[0].username==user){
        console.log(response.data.profiles);
        $scope.nickname = user + "-" + $scope.liste[0].nickname;
        $scope.picture = "../" + $scope.liste[0].profileImage;
    }
    else{
        $scope.nickname = user + "-" + $scope.liste[1].nickname;
        $scope.picture = "../" + $scope.liste[1].profileImage;
    }
 })  

});