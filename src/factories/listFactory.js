(function(){
	'use strict';

	angular
		.module('app')
		.factory('list', ListFactory);

	function ListFactory($http) {
		return {
			'quizzes': [],
			'getQuizzes': function () {
				return $http.get('data/quizzes.json');
			}
		};
	}
})();