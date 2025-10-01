const btn = document.querySelector('.menu__dtn');
const menu = document.querySelector('.menu__list');
 
btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});


const swiper = new Swiper('.progects__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
  loop: true,
          breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        765: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
  navigation: {
    nextEl: '.progect__arrow-next',
    prevEl: '.progect__arrow-prev',
  },

});