$(document).ready(function() {

    //вехрний слайдер
    if($('.carousel')) {
        $('.carousel').slick({
            arrows: false,
            appendDots: $('.carousel__dots'),
            infinite: true,
            dots: true,
            // autoplay: true,
            autoplaySpeed: 3000
        });
    }

    //кастомищация селектов
    $('.search__select').styler();

    //слайдер в футере
    if($('.costamer__slider')) {
        $('.costamer__slider').slick({
            arrows: true,
            appendArrows: $('.costamer-slider__arrows'),
            infinite: true,
            dots: false
        });
    }

    //форма регистрации в блоке registration
    //открыть
    $('.registration__signup').click( function(event){
        event.preventDefault();
        $('.popup__overlay').fadeIn(400, function(){
                $('.popup__modal').css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
            });
    });

    //закрыть
    $('.popup__overlay, .popup__close').click( function(){
        $('.popup__modal')
            .animate({opacity: 0, top: '45%'}, 200, function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });

});