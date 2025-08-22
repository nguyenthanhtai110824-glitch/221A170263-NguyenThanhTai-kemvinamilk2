const dataProducts = {
  'dau': {
    '90ml': { price: '12.000đ', promoPrice: '10.000đ', status: 'Còn hàng', stock: 100 },
    '870ml': { price: '45.000đ', promoPrice: '40.000đ', status: 'Còn hàng', stock: 50 },
    '400ml': { price: '25.000đ', promoPrice: '22.000đ', status: 'Hết hàng', stock: 0 }
  },
  'saurieng': {
    '870ml': { price: '50.000đ', promoPrice: '45.000đ', status: 'Còn hàng', stock: 30 },
    '400ml': { price: '28.000đ', promoPrice: '25.000đ', status: 'Còn hàng', stock: 70 }
  },
  'chocolate': {
    '90ml': { price: '13.000đ', promoPrice: '11.000đ', status: 'Còn hàng', stock: 80 },
    '870ml': { price: '48.000đ', promoPrice: '43.000đ', status: 'Hết hàng', stock: 0 },
    '400ml': { price: '27.000đ', promoPrice: '24.000đ', status: 'Còn hàng', stock: 60 }
  },
  'khoaimon': {
    '90ml': { price: '12.000đ', promoPrice: '10.000đ', status: 'Còn hàng', stock: 90 },
    '870ml': { price: '46.000đ', promoPrice: '41.000đ', status: 'Còn hàng', stock: 40 },
    '400ml': { price: '26.000đ', promoPrice: '23.000đ', status: 'Hết hàng', stock: 0 }
  },
  'dua': {
    '90ml': { price: '12.000đ', promoPrice: '10.000đ', status: 'Còn hàng', stock: 110 },
    '870ml': { price: '46.000đ', promoPrice: '41.000đ', status: 'Còn hàng', stock: 55 },
    '400ml': { price: '26.000đ', promoPrice: '23.000đ', status: 'Còn hàng', stock: 75 }
  },
  'dauxanh': {
    '870ml': { price: '47.000đ', promoPrice: '42.000đ', status: 'Còn hàng', stock: 65 }
  },
  'vani': {
    '870ml': { price: '45.000đ', promoPrice: '40.000đ', status: 'Còn hàng', stock: 50 }
  }
};

function showSize(product, size) {
  const productBody = document.getElementById(`productBody${product.charAt(0).toUpperCase() + product.slice(1)}`);
  const data = dataProducts[product][size];
  let row = `
    <tr>
      <td><span class="strike">${data.price}</span></td>
      <td><span class="price">${data.promoPrice}</span></td>
    </tr>
    <tr>
      <td>Trạng thái</td>
      <td>${data.status}</td>
    </tr>
    <tr>
      <td>Số lượng</td>
      <td>
        <div class="qty-control">
          <button onclick="changeQty('${product}', '${size}', -1)">-</button>
          <input type="text" id="qty-${product}-${size}" value="1" size="2" style="text-align:center;">
          <button onclick="changeQty('${product}', '${size}', 1)">+</button>
        </div>
      </td>
    </tr>
    <tr>
      <td></td>
      <td><span class="add-to-cart">Thêm vào giỏ</span></td>
    </tr>
  `;
  productBody.innerHTML = row;
}

function changeQty(product, size, value) {
  const qtyInput = document.getElementById(`qty-${product}-${size}`);
  let currentQty = parseInt(qtyInput.value);
  currentQty += value;
  if (currentQty < 1) {
    currentQty = 1;
  }
  qtyInput.value = currentQty;
}

function changeImage(mainImageId, thumbnail) {
  const mainImage = document.getElementById(mainImageId);
  mainImage.src = thumbnail.src;
  const thumbnails = thumbnail.parentNode.querySelectorAll('img');
  thumbnails.forEach(img => img.classList.remove('active'));
  thumbnail.classList.add('active');
}

document.addEventListener('DOMContentLoaded', (event) => {
  // Initialize product tables
  showSize('dau', '90ml');
  showSize('saurieng', '870ml');
  showSize('chocolate', '90ml');
  showSize('khoaimon', '90ml');
  showSize('dua', '90ml');
  showSize('dauxanh', '870ml');
  showSize('vani', '870ml');

  const homeLink = document.getElementById('home-link');
  const productsLink = document.getElementById('products-link');
  const aboutLink = document.getElementById('about-link');
  const contactLink = document.getElementById('contact-link');

  const sections = ['hero-banner', 'commitment-section', 'netzero-section', 'product-list', 'contact-section'];

  function hideAllSections() {
    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        section.style.display = 'none';
      }
    });
  }

  function showHomeSections() {
    hideAllSections();
    document.getElementById('hero-banner').style.display = 'block';
    document.getElementById('commitment-section').style.display = 'block';
  }
  
  function showAboutSections() {
    hideAllSections();
    document.getElementById('netzero-section').style.display = 'block';
  }

  homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    showHomeSections();
  });

  productsLink.addEventListener('click', (e) => {
    e.preventDefault();
    hideAllSections();
    document.getElementById('product-list').style.display = 'block';
  });

  aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    showAboutSections();
  });

  contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    hideAllSections();
    document.getElementById('contact-section').style.display = 'block';
  });

  // Show the home sections by default on page load
  showHomeSections();
});