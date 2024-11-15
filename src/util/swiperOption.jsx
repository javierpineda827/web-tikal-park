import PropTypes from "prop-types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Definición de las PropTypes para SwiperConfig
export const SwiperConfigPropTypes = {
  modules: PropTypes.arrayOf(PropTypes.any).isRequired,
  spaceBetween: PropTypes.number.isRequired,
  slidesPerView: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  slidesPerGroup: PropTypes.number.isRequired,
  loop: PropTypes.bool.isRequired,
  speed: PropTypes.number,
  centeredSlides: PropTypes.bool,
  paginationClickable: PropTypes.bool,
  slideToClickedSlide: PropTypes.bool,
  watchOverflow: PropTypes.bool,
  navigation: PropTypes.shape({
    nextEl: PropTypes.string.isRequired,
    prevEl: PropTypes.string.isRequired,
  }).isRequired,
  autoplay: PropTypes.shape({
    delay: PropTypes.number.isRequired,
  }).isRequired,
  pagination: PropTypes.shape({
    el: PropTypes.string.isRequired,
    clickable: PropTypes.bool.isRequired,
  }),
  breakpoints: PropTypes.objectOf(
    PropTypes.shape({
      slidesPerView: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      slidesPerGroup: PropTypes.number,
      spaceBetween: PropTypes.number,
    })
  ),
};

export const swiperGroup8 = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 8,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-group-8",
    prevEl: ".swiper-button-prev-group-8",
  },
  autoplay: {
    delay: 10000,
  },
  breakpoints: {
    1399: {
      slidesPerView: 8,
    },
    1199: {
      slidesPerView: 6,
    },
    992: {
      slidesPerView: 5,
    },
    800: {
      slidesPerView: 4,
    },
    650: {
      slidesPerView: 4,
    },
    400: {
      slidesPerView: 2,
    },
    250: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
  },
};

export const swiperGroup6 = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  slidesPerView: 6,
  slidesPerGroup: 2,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 10000,
  },
  breakpoints: {
    1599: {
      slidesPerView: 6,
    },
    1499: {
      slidesPerView: 5,
    },
    1299: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 3,
    },
    400: {
      slidesPerView: 2,
    },
    350: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
  },
};
export const swiperGroup5 = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  slidesPerView: 5,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-group-5",
    prevEl: ".swiper-button-prev-group-5",
  },
  autoplay: {
    delay: 10000,
  },
  breakpoints: {
    1599: {
      slidesPerView: 5,
    },
    1499: {
      slidesPerView: 5,
    },
    1299: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 3,
    },
    400: {
      slidesPerView: 2,
    },
    250: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
  },
};
export const swiperGroup4 = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  slidesPerView: 4,
  slidesPerGroup: 2,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 10000,
  },
  breakpoints: {
    1199: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    },
    350: {
      slidesPerView: 1,
    },
    250: {
      slidesPerView: 1,
    },
  },
};
export const swiperGroup3 = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  slidesPerView: 3,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-3",
    prevEl: ".swiper-button-prev-3",
  },
  autoplay: {
    delay: 10000,
  },
  breakpoints: {
    1199: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
    400: {
      slidesPerView: 1,
    },
    250: {
      slidesPerView: 1,
    },
  },
};
export const swiperGroup2 = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
  autoplay: {
    delay: 10000,
  },
  breakpoints: {
    1199: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1,
    },
    250: {
      slidesPerView: 1,
    },
  },
};
export const swiperGroup1 = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 50,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-group-1",
    prevEl: ".swiper-button-prev-group-1",
  },
  pagination: {
    el: ".swiper-pagination-group-1",
    clickable: true,
  },
  autoplay: {
    delay: 100000,
  },
};
export const swiperGroupTestimonials1 = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 50,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-group-1",
    prevEl: ".swiper-button-prev-group-1",
  },
  pagination: {
    el: ".swiper-pagination-testimonials-1",
    clickable: true,
  },
  autoplay: {
    delay: 100000,
  },
};
export const swiperGroupPayment = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 10,
  slidesPerView: 4,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-payment",
    prevEl: ".swiper-button-prev-payment",
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    1199: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 4,
    },
    500: {
      slidesPerView: 4,
    },
    350: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 2,
    },
    250: {
      slidesPerView: 2,
    },
  },
};
export const swiperGroupPayment9 = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 20,
  slidesPerView: 9,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-payment",
    prevEl: ".swiper-button-prev-payment",
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    1199: {
      slidesPerView: 9,
    },
    800: {
      slidesPerView: 7,
    },
    650: {
      slidesPerView: 6,
    },
    575: {
      slidesPerView: 5,
    },
    450: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 3,
    },
    250: {
      slidesPerView: 2,
    },
  },
};
export const swiperGroupPayment10 = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 20,
  slidesPerView: 10,
  slidesPerGroup: 2,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-payment",
    prevEl: ".swiper-button-prev-payment",
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    1199: {
      slidesPerView: 10,
    },
    800: {
      slidesPerView: 8,
    },
    650: {
      slidesPerView: 6,
    },
    575: {
      slidesPerView: 5,
    },
    450: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 3,
    },
    250: {
      slidesPerView: 2,
    },
  },
};
export const swiperGroupPayment7 = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 20,
  slidesPerView: 7,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-payment",
    prevEl: ".swiper-button-prev-payment",
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    1199: {
      slidesPerView: 7,
    },
    800: {
      slidesPerView: 6,
    },
    650: {
      slidesPerView: 5,
    },
    575: {
      slidesPerView: 4,
    },
    450: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 3,
    },
    250: {
      slidesPerView: 2,
    },
  },
};
export const swiperGroupTestimonials = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  slidesPerView: 2,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-testimonials",
    prevEl: ".swiper-button-prev-testimonials",
  },
  autoplay: {
    delay: 10000,
  },
  breakpoints: {
    1199: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1,
    },
    350: {
      slidesPerView: 1,
    },
  },
};
export const swiperGroupAnimate = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 24,
  slidesPerView: "auto",
  slidesPerGroup: 1,
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next-animate",
    prevEl: ".swiper-button-prev-animate",
  },
  autoplay: {
    delay: 10000,
  },
  breakpoints: {
    1199: {
      slidesPerView: "auto",
    },
    600: {
      slidesPerView: "auto",
    },
    575: {
      slidesPerView: 1,
    },
    350: {
      slidesPerView: 1,
    },
  },
};
export const swiperCenterSlider = {
  modules: [Autoplay, Pagination, Navigation],
  navigation: {
    nextEl: ".swiper-button-next-center",
    prevEl: ".swiper-button-prev-center",
  },
  slidesPerView: 2,
  slidesPerGroup: 1, // Add slidesPerGroup with a default value
  centeredSlides: true,
  loop: true,
  spaceBetween: 16,
  slideToClickedSlide: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};
export const swiperGroupCenter4 = {
  modules: [Autoplay, Pagination, Navigation],
  navigation: {
    nextEl: ".swiper-button-next-center-4",
    prevEl: ".swiper-button-prev-center-4",
  },
  slidesPerView: "auto",
  slidesPerGroup: 1, // Add slidesPerGroup with a default value
  watchOverflow: true,
  loop: true,
  spaceBetween: 18,
  slideToClickedSlide: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};
