'use strict';
angular.module('dbApp')
	.factory('getUser',function($resource){
		return $resource('/api/getuser',{},{
			getUser:{method:'GET'}
		});
	});