$(function() {

    var html = $('#mycont').html();


    var contentArr = [{
            h1: 'Хочу учить форнтенд, потому что:',
            text: 'Хочу видеть результат работы сразу',
            hr: '<hr>',
        },
        {
            h1: 'Мой контактный телефон:',
            text: '+380673926228',
            hr: '<hr>',
        },
        {
            h1: 'Мой профиль в Фейсбук:',
            text: 'facebook.com/dmitry.scherbakov.585',
            hr: '<hr>',
        },
        {
            h1: 'Мой фидбек:',
            text: 'Если нужно, могу сверстать такую страничку)',
        }   ];

    var content = tmpl(html, {
        data: contentArr
    });


    $('body').append(content);

});
