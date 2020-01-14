$(document).ready(function() {
   /*  $(".ba-menu-btn").on("click", function() {
        $(".ba-menu").toggle();
    }); */

    $(".ba-menu-btn").on("click", function() {
        $(".ba-menu").toggleClass("open");
        $(".ba-menu-btn i").toggleClass("fa-search fa-times");
        $(this).toggleClass("pushed");
    });

    /* $(window).on('resize', function() {
        
        if ( $(this).width() > 991 ) {
            $(".ba-menu").show();
        } else {
            $(".ba-menu").hide();

        }
    }); */
    
    $("#showSearch").on("click", function() {
        $(".ba-search-form").toggleClass("open");
        $("#showSearch i").toggleClass("fa-search fa-times");
        
        //$(this).children().toggleClass("fa-search fa-times");
        
        /* if ($(".ba-search-form").hasClass("open")) {
            $(this).children().toggleClass("fa-search fa-times")
        } else {
            $(this).children().toggleClass("fa-times fa-search")
        } */
    });
    

})