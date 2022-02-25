(function ($) {
    "use strict";
    jQuery(document).ready(function($){
         // testimonial slider 
         $(".testimonial-slider").owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            items: 1,
            margin: 30,
            slideTransition: 'linear',
            smartSpeed: 500,
            animateIn: 'fadeInDown',
            animateOut: 'fadeOutDown',
            autoplay: false,
        });
    });

}(jQuery));