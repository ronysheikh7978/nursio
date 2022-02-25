(function ($) {
    "use strict";
    jQuery(document).ready(function($){
        // section animated & levelling
        var $sectionAbout = $('#aboutUs');
        var $sectionFeatures = $('#featureSection');
        $(window).on("scroll", function(){
            var scrollOffset = $(document).scrollTop();
            var containerOffset2 = $sectionAbout.offset().top - window.innerHeight;
            var containerOffset3 = $sectionFeatures.offset().top - window.innerHeight;

            if (scrollOffset > containerOffset2) {
                $sectionAbout.addClass('animated');
            }
            
            if (scrollOffset > containerOffset3) {
                $sectionFeatures.addClass('animated');
            }
        });
    });

}(jQuery));