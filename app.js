my app.js file is this. // Toggle navigation menu on small screens
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

