$(document).ready(function() {


    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(300);
        },
        function(){
            $(this).children('.sub-menu').slideUp(300);
        }
    );


    $("#default-usage-select").selectbox().bind('change', function() {
        $('<div>Value of #default-usage-select changed to: ' + $(this).val() + '</div>').appendTo('#demo-default-usage .demoTarget').fadeOut(5000, function() {
            $(this).remove();
        });
    });

});
