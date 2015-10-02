var app = angular.module("dbApp");
app.factory('authenticate', function($http, $cookieStore) {
    var res;
    var user = $cookieStore.get('user');
    var psw = $cookieStore.get('psw');
    var promise = $http.post('/api/login', {
        userName: user,
        password: psw
    });
    promise.then(function(response) {
        res = response.data.authentication;

    }, function() {
        console.log("SORRY");
    });
    return {
        getUser: function() {
            return res;
        }
    };
});



