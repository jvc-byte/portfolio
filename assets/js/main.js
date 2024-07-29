(function ($) {
	"use strict";
    jQuery(document).ready(function($){
        /*--------------------
            wow js init
        --------------------*/
        new WOW().init();

        /*-------------------------------------
            portfolio filter activation
        -------------------------------------*/
        var Container = $('#portfolio-marsonry');
        if (Container.length > 0) {
            Container.imagesLoaded(function () {
                var festivarMasonry = $('#portfolio-marsonry').isotope({
                    itemSelector: '.single-portfolio-item',
                    percentPosition: true,
                    masonry: {
                        columnWidth: 0,
                        gutter:25
                    }
                });
                $(document).on('click', '.portfolio-menu li', function () {
                    var filterValue = $(this).attr('data-filter');
                    festivarMasonry.isotope({
                        filter: filterValue
                    });
                });
            });
        }
        /*----------------------------
            portfolio menu active
        ----------------------------*/
        var portfolioMenu = '.portfolio-menu li';
        $(document).on('click', portfolioMenu, function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
        /*-------------------------------
            back to top
        ------------------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });
        /*------------------------------
            smoth achor effect
        ------------------------------*/
        $(document).on('click','#primary-menu li a', function (e) {
            e.preventDefault();
            var anchor = $(this).attr('href');
            var top = $(anchor).offset().top;
            $('html, body').animate({
                scrollTop: $(anchor).offset().top
            }, 1000);
            $(this).parent().addClass('active').siblings().removeClass('active');
        });
        /*------------------------------
            counter section activation
        -------------------------------*/
        var counternumber = $('.counter-num');
        counternumber.counterUp({
            delay: 20,
            time: 3000
        });
        /*----------------------------------------
            testimonial carousel
        ----------------------------------------*/
        var $tesitmonialCarousel = $('#testimonial-carousel');
        if ($tesitmonialCarousel.length > 0) {
            $tesitmonialCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                dots: false,
                nav: false,
                animateIn:'flipInX',
                animateOut:'flipOutY',
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    767: {
                        items: 1,
                        nav: false
                    },
                    768: {
                        items: 1,
                        nav: false
                    },
                    960: {
                        items: 1,
                        nav:false
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });
        }
        
       
        /*------------------------------
            Typed Activate
        ------------------------------*/
        var $typed = $("#typed");
        if ($typed.length > 0) {
            $typed.typed({
                strings: ["UI/UX  Dsigner.", "Front-end Develper.", "Back-end Developer.", "Database Developer.", "IoT Developer.", "Hardware Engineer." ],
                stringsElement: null,
                typeSpeed: 80,
                startDelay: 100,
                backSpeed: 30,
                backDelay: 300,
                loop: true,
                loopCount: 500,
                showCursor: false,
                cursorChar: "|",
                attr: null,
                contentType: 'html',
            });
        }
        /*-----------------------------
        
        -----------------------------*/
        /*------- progressbar activation ----------*/
        var $section = $('#skill');
        $(document).bind('scroll', function (ev) {
            var scrollOffset = $(document).scrollTop();
            var containerOffset = $section.offset().top - window.innerHeight;
            if (scrollOffset > containerOffset) {
                progressbar('#html', 90);
                progressbar('#css', 80);
                progressbar('#javascript',70);
                progressbar('#react',60);
                progressbar('#php',75);
                progressbar('#laravel',70);
                progressbar('#cplus',40);
                progressbar('#python',58);
                progressbar('#ladder_logic',73);
                progressbar('#sql',81);
                // unbind event not to load scroll again
                $(document).unbind('scroll');
            }
        });


        function progressbar(selector, percentage) {
            $(selector).LineProgressbar({
                percentage: percentage,
                fillBackgroundColor: '#ff724c',
                backgroundColor: '#694632',
                duration: 3000
            });
        }
    });
    //define variable for store last scrolltop
    var lastScrollTop = '';
    $(window).on('scroll', function () {
        /*---------------------------
            back to top show / hide
        ---------------------------*/
       var ScrollTop = $('.back-to-top');
       if ($(window).scrollTop() > 1000) {
           ScrollTop.fadeIn(1000);
       } else {
           ScrollTop.fadeOut(1000);
       }
       /*--------------------------
        sticky menu activation
       ---------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('nav-fixed');
                
            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }
        lastScrollTop = st;
       
    });
           
    $(window).on('load',function(){
        /*-----------------------------
            preloader
        -----------------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);
        /*-----------------------------
            back to top
        -----------------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut(100);
    });

}(jQuery));	
