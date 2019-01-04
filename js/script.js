$(document).ready(function() {

    //активная вкладка меню
    if($('.header-menu-list__item') && $('.header-menu-list__item').length > 0) {
        $('.header-menu-list__item').on('click', function() {
            var item =  $('.header-menu-list__item');

            $(item).siblings().removeClass('header-menu-list__item--active');
            $(this).addClass('header-menu-list__item--active');
        });
    }

    //бургер меню
    if($('.header-menu__hamburger') && $('.header-menu__hamburger').length > 0) {
        $('.header-menu__hamburger').on('click', function(event) {
            event.preventDefault();

            var menu = $('.header-menu__navigation2'),
                display = menu.css('display');

            if(display === 'none') {
                menu.css('display', 'inline-block').animate({height: 247}, 'slow');
            } else {
                menu.css('display', 'none').animate({height: 0}, 'slow');
            }

            //крестик
            $('.line__main').toggleClass('burger-line2');
            $('.line__middle').toggleClass('burger-line3');

        });
    }

    //верхний слайдер
    if($('.carousel') && $('.carousel').length > 0) {
        $('.carousel').slick({
            arrows: false,
            appendDots: $('.carousel__dots'),
            infinite: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000
        });
    }

    //плавное появление табов
    // if($('.tabs__title') && $('.tabs__title').length > 0) {
    //     $('.tabs__title').on('click', function () {
    //         $('.tabs__content').fadeIn('slow');
    //
    //     });
    // }

    //кастомищация селектов
    if($('.search__select') && $('.search__select').length > 0) {
        $('.search__select').styler();

        $('.search__select').on('click', function(){
            $(this).toggleClass('search__select--active');
        });
    }

    //слайдер в футере
    if($('.costamer__slider') && $('.costamer__slider').length > 0) {
        $('.costamer__slider').slick({
            arrows: true,
            appendArrows: $('.costamer-slider__arrows'),
            infinite: true,
            dots: false
        });
    }

    //форма регистрации в блоке registration
    //открыть
    if($('.registration__signup') && $('.registration__signup').length > 0) {
        $('.registration__signup').on('click', function(event){
            event.preventDefault();
            $('.popup__overlay').fadeIn(400, function(){
                $('.popup__modal').css('display', 'block').animate({opacity: 1, top: '45%'}, 200);
            });
        });
    }

    //закрыть
    if($('.popup__overlay') && $('.popup__overlay').length > 0 && $('.popup__close') && $('.popup__close').length > 0) {
        $('.popup__overlay, .popup__close').on('click',  function(){
            $('.popup__modal').animate({opacity: 0, top: '45%'}, 200, function(){
                        $(this).css('display', 'none');
                        $('.popup__overlay').fadeOut(400);
                    }
                );
        });
    }

});