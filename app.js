document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector('#menu-btn');
  const navbar = document.querySelector('.navbar');
  const cartBox = document.getElementById('cart-box');
  const cartModal = document.getElementById('cart-modal');
  const cartBackBtn = document.getElementById('cart-back-btn');

  // Toggle navigation menu on small screens
  if (menuBtn && navbar) {
    menuBtn.onclick = () => {
      menuBtn.classList.toggle('fa-times');
      navbar.classList.toggle('active');
    };

    window.onscroll = () => {
      menuBtn.classList.remove('fa-times');
      navbar.classList.remove('active');
    };
  }

  // Toggle cart modal on cart icon click
  if (cartBox && cartModal) {
    cartBox.onclick = () => {
      const isVisible = cartModal.style.display === 'block';
      cartModal.style.display = isVisible ? 'none' : 'block';
    };
  }

  // Cart "Back" button functionality
  if (cartBackBtn) {
    cartBackBtn.onclick = () => {
      cartModal.style.display = 'none';
    };
  }

  // Ensure section and item toggling still works
  function hideAll(className) {
    document.querySelectorAll('.' + className).forEach(el => el.classList.remove('active'));
  }

  window.showSection = function (sectionId) {
    hideAll('sub-buttons');
    hideAll('item-list');
    const section = document.getElementById(sectionId + '-buttons');
    if (section) section.classList.add('active');
  }

  window.showItems = function (itemId) {
    hideAll('item-list');
    const items = document.getElementById(itemId);
    if (items) items.classList.add('active');
  }
});
