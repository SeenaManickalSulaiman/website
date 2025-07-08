// Toggle navigation menu on small screens
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

// Close navbar when scrolling
window.onscroll = () => {
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('active');
};

// Simple product slider (if you want to extend with slider functionality)
// You can add carousel libraries like Swiper or Slick for more features
