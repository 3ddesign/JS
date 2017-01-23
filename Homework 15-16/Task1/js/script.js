function GoogleCallback() {
    console.log('arguments', arguments);
}

$(function() {



    $.ajax({
        url: 'https://ajax.googleapis.com/ajax/services/search/web?v=1.0&rsz=large&q=' + 'test1' + '&callback=GoogleCallback&context=?',
        dataType: 'jsonp'

    });

});




//
// "The Google Web Search API is no longer available. Please migrate to the Google Custom Search API (https://developers.google.com/custom-search/)"
