//Мобильное меню
$('.header__nav-button').click(function() {
  $('.header__nav-button').toggleClass('header__nav-button--close');
  $('.header__nav').toggleClass('header__nav--show');
  $('.mask').toggleClass('show');
});


$('.mask').click(function() {
  $('.header__nav-button').removeClass('header__nav-button--close');
  $('.header__nav').removeClass('header__nav--show');
  $('.mask').removeClass('show');
});

//Слайдер в карточке товара
var swiperCarBlock = new Swiper('.car-block__slider', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.car-swiper-button-next',
    prevEl: '.car-swiper-button-prev',
  },
});
