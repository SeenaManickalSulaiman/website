// Wait for the DOM to load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.item-list ul li').forEach(li => {
    const name = li.children[0].innerText.trim();
    const priceText = li.children[1].innerText.replace('AED', '').trim();
    const price = parseFloat(priceText.split('/').pop());

    const btn = document.createElement('button');
    btn.className = 'add-to-cart-btn';
    btn.innerText = 'Add to Cart';
    btn.onclick = () => addToCart(name, price);
    li.appendChild(btn);
  });
});

function hideAll(className) {
  document.querySelectorAll('.' + className).forEach(el => el.classList.remove('active'));
}

function showSection(sectionId) {
  hideAll('sub-buttons');
  hideAll('item-list');
  const section = document.getElementById(sectionId + '-buttons');
  if (section) section.classList.add('active');
}

function showItems(itemId) {
  hideAll('item-list');
  const items = document.getElementById(itemId);
  if (items) items.classList.add('active');
}

const cart = {};

function addToCart(item, price) {
  if (cart[item]) {
    cart[item].qty += 1;
  } else {
    cart[item] = { price, qty: 1 };
  }
  updateCartUI();
  updateItemButton(item, price);
}

function removeFromCart(item) {
  if (cart[item]) {
    cart[item].qty--;
    if (cart[item].qty <= 0) delete cart[item];
    updateCartUI();
    updateItemButton(item, cart[item]?.price || 0);
  }
}

function updateItemButton(item, price) {
  document.querySelectorAll('.item-list ul li').forEach(li => {
    const name = li.children[0].innerText.trim();
    if (name === item) {
      const existing = li.querySelector('.quantity-controls, .add-to-cart-btn');
      if (existing) existing.remove();

      if (!cart[item]) {
        const btn = document.createElement('button');
        btn.className = 'add-to-cart-btn';
        btn.innerText = 'Add to Cart';
        btn.onclick = () => addToCart(item, price);
        li.appendChild(btn);
      } else {
        const container = document.createElement('div');
        container.className = 'quantity-controls';

        const btnRemove = document.createElement('button');
        btnRemove.innerText = cart[item].qty === 1 ? '🗑️' : '−';
        btnRemove.onclick = () => removeFromCart(item);

        const qtySpan = document.createElement('span');
        qtySpan.className = 'qty';
        qtySpan.innerText = cart[item].qty;

        const btnAdd = document.createElement('button');
        btnAdd.innerText = '+';
        btnAdd.onclick = () => addToCart(item, price);

        container.appendChild(btnRemove);
        container.appendChild(qtySpan);
        container.appendChild(btnAdd);
        li.appendChild(container);
      }
    }
  });
}

function updateCartCount() {
  const count = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cart-count').innerText = count;
}

function updateCartUI() {
  const cartDiv = document.getElementById('cart-items');
  cartDiv.innerHTML = '';
  let total = 0;
  for (const item in cart) {
    const subtotal = cart[item].price * cart[item].qty;
    total += subtotal;
    cartDiv.innerHTML += `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <span>${item}</span>
        <div class="quantity-controls">
          <button onclick="removeFromCart('${item}')">${cart[item].qty === 1 ? '🗑️' : '-'}</button>
          <span class="qty">${cart[item].qty}</span>
          <button onclick="addToCart('${item}', ${cart[item].price})">+</button>
        </div>
      </div>
    `;
  }
  document.getElementById('cart-total').innerText = `Total: ${total.toFixed(2)} AED`;
  updateCartCount();
}

function toggleCartModal() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
}

function sendOrderToWhatsApp() {
  const name = document.getElementById('customer-name').value;
  const phone = document.getElementById('customer-phone').value;
  const address = document.getElementById('customer-address').value;

  if (!name || !phone || !address) {
    alert('Please fill out all the fields.');
    return;
  }

  let msg = `My Order:%0A`;
  for (const item in cart) {
    msg += `${item} x${cart[item].qty} = ${cart[item].price * cart[item].qty} AED%0A`;
  }
  msg += `%0ATotal: ${Object.values(cart).reduce((sum, i) => sum + i.price * i.qty, 0)} AED`;
  msg += `%0A%0AName: ${name}%0APhone: ${phone}%0AAddress: ${address}`;

  // Detect device type
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const baseUrl = isMobile 
    ? `https://wa.me/971585733762?text=${msg}` 
    : `https://web.whatsapp.com/send?phone=971585733762&text=${msg}`;

  window.open(baseUrl, '_blank');

  setTimeout(() => {
    alert("✅ Thank you! Your order has been sent successfully.");
  }, 500);

  document.getElementById('cart-modal').style.display = 'none';
}

