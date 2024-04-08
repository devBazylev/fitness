import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

new Swiper('.reviews', {
  modules: [ Navigation ],

  slideActiveClass: 'reviews__slide--visible',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 100,

  breakpoints: {
    320: {
      width: 240,
      navigation: false,
    },
    768: {
      width: 500,
    },
    1366: {
      width: 560,
    },
  }
});
