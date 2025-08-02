// ===============================
// NAVIGATION TOGGLE
// ===============================
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

// ===============================
// CLOSE NAVBAR ON SCROLL
// ===============================
window.onscroll = () => {
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('active');

  // Sticky header toggle
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }

  // Show scroll-to-top button
  const scrollBtn = document.getElementById('scroll-top');
  if (scrollBtn) {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  }
};

// ===============================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===============================
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

// ===============================
// MODAL CLICK OUTSIDE HANDLER (Cart)
// ===============================
window.addEventListener('click', function (e) {
  const cartModal = document.getElementById('cart-modal');
  if (e.target === cartModal) {
    cartModal.style.display = 'none';
  }
});

// ===============================
// DARK MODE TOGGLE
// ===============================
const darkToggle = document.getElementById('dark-mode-toggle');
if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkToggle.classList.toggle('active');
  });
}

// ===============================
// SCROLL-TO-TOP BUTTON
// ===============================
const scrollTopBtn = document.getElementById('scroll-top');
if (scrollTopBtn) {
  scrollTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}

// ===============================
// TOAST / ALERT MESSAGE FUNCTION
// ===============================
function showToast(message, duration = 3000) {
  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('visible');
  }, 100);

  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 500);
  }, duration);
}
