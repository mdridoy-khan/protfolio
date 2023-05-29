(function ($) {
"use strict";

/*---------------------------------------------------------------------------------------
    Mean Menu Active
-----------------------------------------------------------------------------------------*/
    // Mobile-menu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "767",
    });
/*---------------------------------------------------------------------------------------
    Data Background Active
-----------------------------------------------------------------------------------------*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
/*---------------------------------------------------------------------------------------
    Sticky Header Active
-----------------------------------------------------------------------------------------*/
    // sticky Header layout 1
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
          $("#header-sticky").removeClass("sticky");
        } else {
          $("#header-sticky").addClass("sticky");
        }
    }); 
    // sticky Header layout 2, 3
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
          $("#header-sticky-2").removeClass("sticky");
        } else {
          $("#header-sticky-2").addClass("sticky");
        }
    }); 
    // sticky Header Inner page
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
          $("#header-sticky-3").removeClass("sticky");
        } else {
          $("#header-sticky-3").addClass("sticky");
        }
    });
	

    // owlCarousel slider protfolio-slider active
    $('.protfolio-slider').owlCarousel({
        animateOut: 'animate__zoomOut',
        animateIn: 'animate__fadeInDown',
        dots:false,
        autoplay:true,
        loop:true,
        navText:['<i class="fa-solid fa-left-long"></i>','<i class="fa-solid fa-right-long"></i>'],
        nav:true,
        autoplay:true,
        items:1,
        margin:0,
        stagePadding:0,
        smartSpeed:450
    });

    
    // skill area slider active
    $('.skill-activation').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        },
        1000:{
          items:1
        }
      }
    })

/*---------------------------------------------------------------------------------------
    Scroll to top Active
-----------------------------------------------------------------------------------------*/
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<span><i class="fa-solid fa-arrow-up"></i></span>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


})(jQuery); 