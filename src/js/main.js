$(document).ready(function() {

    $('.slider').slick({
        dots: true,
        infinite: false,
        arrows:false,
        fade:true,
        adaptiveHeight: true
        // autoplay:true,
        // autoplaySpeed:1500

    });

     $('.slider-logo').slick({
        slidesToShow:5,
        slidesToScroll: 1,
        infinite: true,
         dots: false,
         arrows:true,
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
        adaptiveHeight: true
        // autoplay:true,
        // autoplaySpeed:1500

    });

    $('.slider-testimonials').slick({
        dots: true,
        infinite: false,
        arrows:false,
        fade:true,
        adaptiveHeight: true
        // autoplay:true,
        // autoplaySpeed:1500

    });


    $(".button-apply").on("click",function(e){
        e.preventDefault();
        $(this).parent().parent().parent().find('.slide-toggle').slideToggle();
    });

});



