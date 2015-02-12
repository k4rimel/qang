(function(){
	'use strict';

	angular
		.module('app')
		.config(['$routeProvider','$locationProvider',
			function($routeProvider, $locationProvider) {
				$routeProvider
					.when('/', {
						templateUrl: '/src/views/partials/list/list.html',
						controller: 'ListController'
					})
					.when('/player/:quizId', {
						templateUrl: '/src/views/partials/player/player-start-screen.html',
						controller: 'quizPlayerController'
					})
					.when('/player/:quizId/:questionId', {
						templateUrl: '/src/views/partials/player/player-start-screen.html',
						controller: 'quizPlayerController'
					})
					.otherwise({
						redirectTo: '/'
					});
					$locationProvider.html5Mode({
						enabled: true,
						requireBase: false
					});
				// add <base href=""> in <head> tag to the view if requireBase is set to true
			}]);
})();