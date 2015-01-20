(function(){
	'use strict';

	angular
		.module('app')
		.controller('ListController', ListController);

	function ListController(list) {
		var quizList = this;
		quizList.quizzes = [];
		console.log(list.getQuizzes());
		list.getQuizzes().success(function(data) {
			quizList.quizzes = data;
		});
	}

})();