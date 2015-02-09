(function(){
	'use strict';

	angular
		.module('app')
		.controller('quizPlayerController', ['$routeParams', 'Quiz', QuizPlayerController]);

	function QuizPlayerController($routeParams, Quiz) {
		var player      = this;
			player.quiz = null;

		player.loadQuiz = function (id) {
			console.log($routeParams);
			Quiz.get($routeParams.quizId).then(function(quiz) {
			    player.quiz = data;

		  	});

		}

	}

})();