'use strict';
angular.module('dashboard')
	.factory('getUser',function($resource){
		return $resource('/api/getuser',{},{
			getUser:{method:'GET'}
		});
	});