$(document).ready(function(){

        $('.gallery-row').imagesLoaded( function() {
            $(".gallery-row").owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                margin: 30,
                slideTransition: 'linear',
                smartSpeed: 500,
                navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
                responsive : {
                    0 : {
                        items: 1,
                        center: true,
                        autoWidth: true
                    },
                    480: {
                        center: true,
                        autoWidth: true
                    },
                    576: {
                        items: 1,
                        center: false,
                        autoWidth: false
                    },
                    768 : {
                        items: 2,
                        center: true,
                        autoWidth: true
                    },
                    992: {
                        items: 2,
                        autoWidth: false,
                        center: false
                    },
                    1200 : {
                        items: 3,
                        autoWidth: true,
                        center: true
                    },
                    1400: {
                        autoWidth: false,
                        center: false
                    }
                }
            });
        });

        $('.gallery-row-2').imagesLoaded( function() {
            $(".gallery-row-2").owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                items: 3,
                margin: 30,
                slideTransition: 'linear',
                smartSpeed: 500,
                navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
                responsive : {
                    0 : {
                        items: 1,
                        center: true,
                        autoWidth: true
                    },
                    480: {
                        center: true,
                        autoWidth: true
                    },
                    576: {
                        items: 1,
                        center: false,
                        autoWidth: false
                    },
                    768 : {
                        items: 2,
                        center: true,
                        autoWidth: true
                    },
                    992: {
                        items: 2,
                        autoWidth: false,
                        center: false
                    },
                    1200 : {
                        items: 3,
                        autoWidth: true,
                        center: true
                    },
                    1400: {
                        autoWidth: false,
                        center: false
                    }
                }
            });
        });

        $('.gallery-row-3').imagesLoaded( function() {
            $(".gallery-row-3").owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                items: 3,
                margin: 30,
                slideTransition: 'linear',
                smartSpeed: 500,
                navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
                responsive : {
                    0 : {
                        items: 1,
                        center: true,
                        autoWidth: true
                    },
                    480: {
                        center: true,
                        autoWidth: true
                    },
                    576: {
                        items: 1,
                        center: false,
                        autoWidth: false
                    },
                    768 : {
                        items: 2,
                        center: true,
                        autoWidth: true
                    },
                    992: {
                        items: 2,
                        autoWidth: false,
                        center: false
                    },
                    1200 : {
                        items: 3,
                        autoWidth: true,
                        center: true
                    },
                    1400: {
                        autoWidth: false,
                        center: false
                    }
                }
            });
        });

        $('.gallery-row-4').imagesLoaded( function() {
            $(".gallery-row-4").owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                items: 3,
                margin: 30,
                slideTransition: 'linear',
                smartSpeed: 500,
                navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
                responsive : {
                    0 : {
                        items: 1,
                        center: true,
                        autoWidth: true
                    },
                    480: {
                        center: true,
                        autoWidth: true
                    },
                    576: {
                        items: 1,
                        center: false,
                        autoWidth: false
                    },
                    768 : {
                        items: 2,
                        center: true,
                        autoWidth: true
                    },
                    992: {
                        items: 2,
                        autoWidth: false,
                        center: false
                    },
                    1200 : {
                        items: 3,
                        autoWidth: true,
                        center: true
                    },
                    1400: {
                        autoWidth: false,
                        center: false
                    }
                }
            });
        });

        
        
});