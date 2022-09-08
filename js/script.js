$(function () {
    'use strict';


    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        dots: true,
        arrows: false,

    });
// slider_row_zooom===================
    $('.slider_row').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1000,
      speed: 1000,
      dots: false,
      nextArrow:'<i class="fas fa-chevron-right nxt_arr "></i>',
      prevArrow:'<i class="fas fa-chevron-left perv_arr "></i>',

  });

  $('.slider_row_2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 1000,
    dots: false,
    nextArrow:'<i class="fas fa-chevron-right nxt_arr_2 "></i>',
    prevArrow:'<i class="fas fa-chevron-left perv_arr_2 "></i>',

});


    // counter js start=================

    
    $('#getting-started').countdown('2022/01/01', function(event) {
        $(this).html(event.strftime('%D days %H:%M:%S'));
      });

    //   increament ==================== decreament

    $('.stepper-widget').stepper();

    $('.stepper-widget').stepper({
        upSelector: '.js-qty-up',
        downSelector: '.js-qty-down',
        inputSelector: '.js-qty-input',
        disabledClass:'disabled',
      
        maxQty: 999,
        minQty: 1,
        step: 1
      });
      

});