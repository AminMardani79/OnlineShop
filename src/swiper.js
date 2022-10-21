// import swiper
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
new Swiper(".bannerSwiper", {
  direction: "horizontal",
  loop: true,
  allowTouchMove: true,
  hashNavigation: {
    watchState: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
new Swiper(".latest-products__swiper", {
  slidesPerView: 1.5,
  spaceBetween: 2,
  allowTouchMove: true,
  freeMode: true,
  hashNavigation: {
    watchState: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 5,
    },
  },
});
new Swiper(".brands__swiper", {
  slidesPerView: 2,
  spaceBetween: 2,
  allowTouchMove: true,
  freeMode: true,
  hashNavigation: {
    watchState: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 6,
    },
    992: {
      slidesPerView: 8,
    },
  },
});
