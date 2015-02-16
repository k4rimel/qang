(function() {
    'use strict';

    angular
        .module('app')
        .controller('quizPlayerController', ['$routeParams', 'Quiz', QuizPlayerController]);

    function QuizPlayerController($routeParams, Quiz) {
        var player = this;
        player.currentQuestion = null;

        player.launch = function(quiz) {
            player.currentQuestion = quiz.Questions[$routeParams.questionId - 1];
        };
        player.loadQuiz = function() {
            Quiz.get($routeParams.quizId).then(function(quiz) {
                player.quiz = quiz;
                player.launch(player.quiz.Quiz);
            });
            console.log(player.currentQuestion);
        };
        player.nextQuestion = function() {

        };
        player.quiz = player.loadQuiz();
    }

})();