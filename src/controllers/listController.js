(function(){
	'use strict';

	angular
		.module('app')
		.controller('ListController', ListController);

	function ListController(quiz) {
		var quizList = this;
		quizList.quizzes = [];
		quiz.all().then(function(data) {
		    quizList.quizzes = data;
	  	});
	}

})();