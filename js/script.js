$( document ).ready(function() {

    $( "div.container" )
        .on( "click", "a:contains('shedule'), div:contains('choose tour'), div:contains('get consultation')", function( event ) {
        $("div.overlay").fadeIn("slow");
        $("div.modal").slideDown("slow");   
    });

    $("span[aria-hidden='true']").on("click", function() {
        $("div.overlay").fadeOut("slow");
        $("div.modal").slideUp("slow");
    });

});
