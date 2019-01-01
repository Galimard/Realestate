$(document).ready(function() {

    // if($('.carousel')) {
    //     $('.carousel').slick({
    //         arrows: false,
    //         appendDots: $('.carousel__dots'),
    //         infinite: true,
    //         dots: true,
    //         // autoplay: true,
    //         autoplaySpeed: 3000
    //     });
    // }

    $('.search__select').styler();

    if($('.costamer__slider')) {
        $('.costamer__slider').slick({
            arrows: true,
            appendArrows: $('.costamer-slider__arrows'),
            infinite: true,
            dots: false
        });
    }
});