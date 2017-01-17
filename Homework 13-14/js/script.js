$(document).ready(function() {
    "use strict";

    // to LS


    // from LS


    // Render with tmpl.js

    var html = $('#quiz').html();
    var quizContent = {
        question1: '1. Что такое jQuery плагины?',
        answer1: 'Часть функционала jQuery, вынесенная в отдельный файл',
        answer2: 'Особые возможности jQuery',
        answer3: 'Набор функций использующих jQuery',
        question2: '2. Какой файл обязательно должен включать плагин?',
        answer4: 'Файл CSS стилей',
        answer5: 'Javascript файл',
        answer6: 'html файл',
        question3: '3. В каком объекте не хранятся все jQuery-функции?',
        answer7: 'jQuery.function',
        answer8: 'jQuery.fn',
        answer9: 'jQuery.prototype',
    };
    var myQuiz = tmpl(html, {
        content: quizContent
    });
    $('body').append(myQuiz);

    // Modal and check

    $("#check").click(function() {
        if ($("#three_first").is(':checked') && $("#two_second").is(':checked') && $("#one_third").is(':checked') && $("#three_third").is(':checked')) {
            $('body').append(('<div id="openModal" class="overlay"><div><a href="#close" class="close">X</a><p>Все ответы верны!<br>Поздравляем!</p></div></div>'));
            $(".close").click(function() {
                $("#openModal").remove();
            });
            $("input:checkbox").prop("checked", false);
        } else {
            $('body').append(('<div id="openModal" class="overlay"><div><a href="#close" class="close">X</a><p>Вы допустили ошибку в ответе попробуйте еще раз</p></div></div>'));
            $(".close").click(function() {
                $("#openModal").remove();
            });
            $("input:checkbox").prop("checked", false);
        }
    });



});
