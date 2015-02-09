(function(){
	'use strict';

	angular
		.module('app')
		.controller('ListController', ListController);

	function ListController(Quiz) {
		var quizList = this;
		quizList.quizzes = [];
		Quiz.all().then(function(quizzes) {
		    quizList.quizzes = quizzes;
	  	});
	}

})();