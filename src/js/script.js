new WOW().init();

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

//Кастомная метка
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [47.225462, 39.714007],
      zoom: 17
    }, {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'src/img/GeoMark.png',
      // Размеры метки.
      iconImageSize: [168, 84],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-90, -90]
    });

  myMap.geoObjects
    .add(myPlacemark);
});

