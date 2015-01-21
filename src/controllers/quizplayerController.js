(function(){
	'use strict';

	angular
		.module('app')
		.controller('QuizplayerController', QuizplayerController);

	function QuizplayerController(quiz) {
		var player      = this;
			player.quiz = null;

		player.loadQuiz = function (id) {
			quiz.get(id).then(function(data) {
			    player.quiz = data;
		  	});
		}

	}

})();