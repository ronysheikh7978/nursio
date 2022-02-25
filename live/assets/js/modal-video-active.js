(function ($) {
    "use strict";
    jQuery(document).ready(function($){
        // modal video
        $(".js-video-button").modalVideo({
            youtube:{
                controls:0,
                nocookie: true
            }
        });
    });

}(jQuery));