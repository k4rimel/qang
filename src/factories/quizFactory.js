(function(){
	'use strict';

	angular
		.module('app')
		.factory('quiz', quizFactory);

	function quizFactory($http, $q) {
		var factory = {};

		factory.quiz = {};
		factory.quizzes = [];

		function makeRequest(url) {
      		var deferred = $q.defer();
      		$http.get(url).then(function(resp) {
  		  		deferred.resolve(resp.data);
      		});
      		return deferred.promise;
    	};

		factory.get = function(id) {
			if(!factory.quiz.hasOwnProperty(id)) {
            	factory.quiz[id] = makeRequest('data/quizzes/quiz_'+id+'.json');
			}
			return factory.quiz[id];
		};
		factory.all = function() {
			if(!factory.quizzes.length) {
            	factory.quizzes = makeRequest('data/quizzes.json');
			}
			return factory.quizzes;
		};

		return factory;
	}
})();