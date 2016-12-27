$(document).ready(function() {

    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(300);
            $(this).children('.sub-menu').hover(function() {

                      $(this).css('background', '#045F94');
                  },
                  function() {
                        $(this).css('background', '#258dc8');

 });

        },
        function(){
            $(this).children('.sub-menu').delay(200).slideUp(300);
        }
    );

    $("#default-usage-select").selectbox().bind('change', function() {
        $('<div>Value of #default-usage-select changed to: ' + $(this).val() + '</div>').appendTo('#demo-default-usage .demoTarget').fadeOut(5000, function() {
            $(this).remove();
        });
    });

});
