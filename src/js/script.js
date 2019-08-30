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

