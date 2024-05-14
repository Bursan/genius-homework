var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    // slidesPerView: 3,
    // spaceBetween: 25,
    loop: true,
  
    // Responsive breakpoints
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      756: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 25
      }
    }
  });
  