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
		.state('root1',{
			url:'/root1',
			templateUrl:'templates/root1.html',
			controller:'rootController',
			//abstract:true,
			// data: {
   //        requireLogin: true
   //      }
		})
		.state('root1.work',{
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