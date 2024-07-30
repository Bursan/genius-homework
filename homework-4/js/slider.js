const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".slider__right_arrow",
    prevEl: ".slider__left_arrow",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// const swiper = new Swiper(".swiper-container", {
//   loop: true,
//   slidesPerView: 1,
//   spaceBetween: 16,
//   breakpoints: {
//     768: {
//       slidesPerView: 2,
//     },
//     1280: {
//       slidesPerView: 3,
//     },
//   },
//   pagination: {
//     el: ".pagination",
//     bulletClass: "pagination__button",
//     bulletActiveClass: "pagination__button--active",
//   },
//   navigation: {
//     nextEl: ".carousel-button.next",
//     prevEl: ".carousel-button.prev",
//   },
// });
