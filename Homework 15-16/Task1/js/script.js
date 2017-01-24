$(document).ready(function() {

var request = $('.search');
console.log(request);

    $(function() {
        var URL = "https://pixabay.com/api/?key=" + '4341489-c7135f07e924eb271481ce96f' + "&q=" + encodeURIComponent('kids');
        $.getJSON(URL, function(data) {
            var num = 1;
            if (parseInt(data.totalHits) > 2)
                $.each(data.hits, function(i, hit) {

                    $('.searchresult').append('<a target="_blank" href="' + hit.pageURL + '">' + hit.pageURL + '</a>');
                    num++;
                    if (num == 12) {
                        exit();
                    }
                });
            else
                    $('.searchresult').append('<p>По Вашему запросу ничего не найдено...</p>');
        });
    });
});



// А гугл сказал: "The Google Web Search API is no longer available. Please migrate to the Google Custom Search API (https://developers.google.com/custom-search/)"
