// ========== NAVIGATION TOGGLE ==========
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

// ========== CLOSE NAVBAR ON SCROLL ==========
window.onscroll = () => {
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('active');
};

// ========== OPTIONAL: ADD SLIDER HERE ==========
/*
// Example using Swiper.js (uncomment if you're using Swiper library)
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
*/

// ========== OPTIONAL: SMOOTH SCROLLING TO SECTIONS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href');
    const targetElement = document.querySelector(targetID);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ========== OPTIONAL: CLOSE MODALS OR POPUPS ON OUTSIDE CLICK ==========
window.addEventListener('click', function (e) {
  const cartModal = document.getElementById('cart-modal');
  if (e.target === cartModal) {
    cartModal.style.display = 'none';
  }
});

// ========== YOU CAN ADD MORE DYNAMIC BEHAVIOR BELOW ==========
