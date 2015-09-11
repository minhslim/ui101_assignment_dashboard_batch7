var app = angular.module("dashboard", []);
app.controller('loginController',function($scope,$http){
	function login(data){
		var promise=$http.post('/api/login',data);
		console.log(promise);
	}
	
});