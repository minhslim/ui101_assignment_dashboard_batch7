
// app.factory('authenticate', function($http, $cookieStore) {
//     var user = $cookieStore.get('user');
//     var psw = $cookieStore.get('psw');
//     var promise = $http.post('/api/login', {
//         userName: user,
//         password: psw
//     });






// });
var app = angular.module("dbApp");
app.factory('authenticate', function($http,$cookieStore) {
	var res;
	var user = $cookieStore.get('user');
    var psw = $cookieStore.get('psw');
    var promise = $http.post('/api/login', {
             userName: user,
             password: psw
         });
        promise.then(function(response) {
        	res = response.data.authentication;
            // if (response.data.authentication === "success") {
            //     // Log the user in
            //     //console.log("login");

            //     $state.go("root");

            // } else {
            //     // Not log the user in
            //     console.log("error");
            // }
        }, function() {
            console.log("SORRY");
        });
	return {
		getUser: function() {
		return res;
			

		}
	};
});