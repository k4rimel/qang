(function(){
	'use strict';

	angular
		.module('app')
		.controller('quizPlayerController', ['$routeParams', 'Quiz', QuizPlayerController]);

	function QuizPlayerController($routeParams, Quiz) {
		var player      	   = this;
		player.currentQuestion = null;

		player.launch = function(quiz) {
			player.currentQuestion = quiz.Questions[$routeParams.questionId-1];
		};
		player.loadQuiz = function () {
			Quiz.get($routeParams.quizId).then(function(quiz) {
				console.log(quiz.Quiz.title);
			    player.quiz = quiz;
		  		player.launch(player.quiz.Quiz);
		  	});
		};
		player.nextQuestion = function() {

		};
		player.quiz = player.loadQuiz();

	}

})();