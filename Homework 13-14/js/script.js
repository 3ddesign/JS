$(document).ready(function() {
    // "use strict";





    var html = $('#mycont').html();


    var myInfo = {
        question1: '1. Что такое jQuery плагины?',
        question2: '2. Какой файл обязательно должен включать плагин?',

    };

    var myContent = tmpl(html, {
        content: myInfo
    });


    $('body').append(myContent);




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
