(function ($) {
    "use strict";

    jQuery(document).ready(function($){

        // initializing preloader
        $(window).on('load',function(){
            var preLoder = $(".preloader");
            preLoder.fadeOut(1000);

            // banner img animation
            setInterval(function(){ 
                $(".banner .part-img").addClass("active")
            }, 500);    
        });

        // navbar-toggle button open & close Symbol
        var navToggler = $('.navbar-toggler');
        var navIcon = navToggler.find('i');
        navToggler.on('click', function() {
            if(navIcon.hasClass('fa-bars')) {
                navIcon.removeClass('fa-bars');
                navIcon.addClass('fa-times');
            } else {
                navIcon.addClass('fa-bars');
                navIcon.removeClass('fa-times');
            }
        });

        // fixed navbar
        $(window).on('scroll', function(){
            var headerSection = $('.header');
            var backToTopBtn = $('.back-to-top-btn a');
            var $footerSection = $('#footerSec');
            var scrollOffset = $(document).scrollTop();
            var containerOffset4 = $footerSection.offset().top - window.innerHeight;
            if ($(window).scrollTop() > 300) {
                headerSection.addClass('header-fixed fadeInDown animated');
                $('.logo').find("img").attr("src","assets/img/logo1.png");
                $('.contact-buttn a').addClass('nurs-btn-3');
            } else {
                headerSection.removeClass('header-fixed fadeInDown animated');
                $('.logo').find("img").attr("src","assets/img/logo.png");
                $('.contact-buttn a').removeClass('nurs-btn-3');
                $('.contact-buttn a').addClass('nurs-btn');
            }

            if ($(window).scrollTop() > 1500) {
                backToTopBtn.addClass('active');
            } else {
                backToTopBtn.removeClass('active');
            }

            
            if (scrollOffset > containerOffset4) {
                $('.back-to-top-btn a').addClass('on-the-foot');
            } else {
                $('.back-to-top-btn a').removeClass('on-the-foot');
            }
            
        });
    });

}(jQuery));	
