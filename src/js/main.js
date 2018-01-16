$(document).ready(function() {

    $('.slider').slick({
        slidesToShow:4,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
        adaptiveHeight: true,
        autoplay:true,
        autoplaySpeed:1000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true


                }
            }
        ]
    });



     $('.slider-logo').slick({
        slidesToShow:5,
        slidesToScroll: 1,
        infinite: true,
         dots: false,
         arrows:true,
         autoplay:true,
         autoplaySpeed:1500,
         responsive: [
             {
                 breakpoint: 1024,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 3,
                     infinite: true,
                     dots: false
                 }
             },
             {
                 breakpoint: 600,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2
                 }
             },
             {
                 breakpoint: 480,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                 }
             }
         ]
     });

    $('.slider-projects').slick({
        dots: true,
        infinite: false,
        arrows:false,
        fade:true,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay:true,
        autoplaySpeed:1500

    });

    $('.slider-testimonials').slick({
        dots: true,
        infinite: false,
        arrows:false,
        fade:true,
        adaptiveHeight: true,
        autoplay:true,
        autoplaySpeed:1500

    });


    $(".button-apply").on("click",function(e){
        e.preventDefault();
        $(this).parent().parent().parent().find('.slide-toggle').slideToggle();
    });


    var $container = $('.masonry-container');
        $container.masonry( {
            columWidht: '.item',
            itemSelector: '.item',
            gutter: 35
        });

});



