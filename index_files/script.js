"use strict";

document.addEventListener('DOMContentLoaded', function(){
  const swiperIntro = new Swiper('.b-main-intro__swiper', {
    // Кол-во пролистываемых слайдов
    slidesPerGroup: 1,
    // Кол-во отображаемых слайдов
    slidesPerView: 1,
    // Стрелки
    navigation: {
      prevEl: '.b-main-intro__button--prev',
      nextEl: '.b-main-intro__button--next',
    },
    // Пагинация
    pagination: {
      el: '.swiper-pagination',
    },
    // Возможность управлять с клавиатуры
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    // Отключение слайдера, если слайдов меньше видимой области
    watchOverflow: true,
  });
})

