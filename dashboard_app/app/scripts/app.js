'use strict';
angular.module('dbApp',[
	'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
	'ui.router',
	'ui.bootstrap'
	])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/login');
	$stateProvider
	 	.state('login',{
			url:'/login',
			templateUrl:'templates/login.html',
			controller:'login'
		})
		.state('root',{
			url:'/root',
			templateUrl:'templates/root.html',
			controller:'rootController'
		});

});