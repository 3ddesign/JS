$(document).ready(function() {
    $(function() {
        var URL = "https://pixabay.com/api/?key=" + '4341489-c7135f07e924eb271481ce96f' + "&q=" + encodeURIComponent('red roses');
        $.getJSON(URL, function(data) {
            if (parseInt(data.totalHits) > 0)
                $.each(data.hits, function(i, hit) {
                    console.log(hit.pageURL);
                });
            else
                console.log('No hits');
        });
    });
});



// А гугл сказал: "The Google Web Search API is no longer available. Please migrate to the Google Custom Search API (https://developers.google.com/custom-search/)"
