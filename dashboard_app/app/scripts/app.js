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
			controller:'loginController',
			// data: {
   //        requireLogin: false
   //      }
		})
		.state('root',{
			url:'/root',
			templateUrl:'templates/root.html',
			controller:'rootController',
			abstract:true,
			// data: {
   //        requireLogin: true
   //      }
		})
		.state('root.work',{
			url:'/work',
			templateUrl:'templates/work.html',
			controller:'workController'
		})
		.state('root.overview',{
			url:'/overview',
			templateUrl:'templates/overview.html',
			controller:'overviewController'
		})
		.state('root.producer',{
			url:'/producer',
			templateUrl:'templates/producer.html',
			controller:'producerController'
		})
		.state('root.contact',{
			url:'contact',
			templateUrl:'templates/contact.html',
			controller:'contactController'
		});
});