var app = angular.module('dbApp');

app.factory('getUser',function($resource,$cookieStore){
	var user = $cookieStore.get('user');
	return $resource('/api/getuser',{},{
         getUser: {
         	method:'GET',
         	params:{
         		user: user
         	}
         }
	});

	// var entry = $resource('/api/getuser',{}, {
                
 //              });
 //              entry.query({user:user},function(response){
 //                 $scope.username=response.data.name;
 //              }, function() {
 //                console.log("SORRY");
 //            });
});
