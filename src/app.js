(function(){
	'use strict';

	angular
		.module('app', ['ngRoute'])
		.config(['$routeProvider','$locationProvider',
			function($routeProvider, $locationProvider) {
				$routeProvider
					.when('/', {
						templateUrl: 'src/views/partials/list.html',
						controller: 'ListController'
					})
					.when('/player/:quizId', {
						templateUrl: 'src/views/partials/player-start-screen.html',
						controller: 'quizPlayerController'
					})
					.otherwise({
						redirectTo: '/list'
					});
					$locationProvider.html5Mode({
						enabled: true,
						requireBase: false
					});
				// add <base href=""> otherwise (if requireBase is set to true)
			}]);
})();