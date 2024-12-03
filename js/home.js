$(document).ready(function(){
    $(".owl-one").owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items: 2,
            },
            1000:{
                items: 3,
            }
        }
    });
  });