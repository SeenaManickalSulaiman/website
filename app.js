// ======= Navigation Toggle for Small Screens =======
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('fa-times');  // Change icon (hamburger ↔ X)
  navbar.classList.toggle('active');     // Show/hide navbar
});

// ======= Close Navbar on Scroll =======
window.addEventListener('scroll', () => {
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('active');
});

// ======= Optional: Basic Product Slider Placeholder =======
// You can replace this with libraries like Swiper.js or Slick.js if needed
// Example (Swiper.js):
// const swiper = new Swiper('.product-slider', {
//   slidesPerView: 1,
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
