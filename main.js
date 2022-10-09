$(document).ready(function(){


    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function(){


        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 68){
            $('header .header2').addClass('header-active');
        }else {
            $('header .header2').removeClass('header-active');
        }

    });

    $('.home-slider').owlCarousel({

        items:1,
        loop:true,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:8000

    });

    $('.small-image img').click(function(){

        $(this).addClass('image-active').siblings().removeClass('image-active');

        let image = $(this).attr('src');

        $('.big-image img').attr('src', image);

    });

});