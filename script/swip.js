var swiper1 = new Swiper('.swiper1', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: -50,
    depth: 100,
    modifier: 1,
    slideShadows : false,
  },
  pagination: {
    el: '.swiper-pagination1',
  },
});

var swiper2 = new Swiper('.swiper2', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: 'auto',
  loop: true,
  loopFillGroupWithBlank: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : false,
  },
  pagination: {
    el: '.swiper-pagination2',
  },
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
});
