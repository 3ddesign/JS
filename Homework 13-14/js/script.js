$(document).ready(function() {
"use strict";


    $("#check").click(function() {

        if ($("#three_first").is(':checked') && $("#two_second").is(':checked') && $("#one_third").is(':checked') && $("#three_third").is(':checked')) {
            alert('верно!');
            $("input:checkbox").prop("checked", false);

        } else {
            alert('не верно!');
            $("input:checkbox").prop("checked", false);

        }
    });
});
