(function ($) {
    "use strict";
    jQuery(document).ready(function($){
        // section animated & levelling
        var $sectionAbout = $('#aboutUs');
        $(window).on("scroll", function(){
            var scrollOffset = $(document).scrollTop();
            var containerOffset2 = $sectionAbout.offset().top - window.innerHeight;

            if (scrollOffset > containerOffset2) {
                $sectionAbout.addClass('animated');
            }
        });
    });

}(jQuery));