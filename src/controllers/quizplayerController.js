(function(){
	'use strict';

	angular
		.module('app')
		.controller('quizPlayerController', ['$routeParams', 'Quiz', QuizPlayerController]);

	function QuizPlayerController($routeParams, Quiz) {
		var player      = this;
		player.loadQuiz = function () {
			Quiz.get($routeParams.quizId).then(function(quiz) {
				console.log(quiz.Quiz.title);
			    player.quiz = quiz;
		  	});
		}
		player.quiz = player.loadQuiz();

	}

})();