const products = [
  {
    name: 'Sony Playstation 5',
    url: 'images/playstation_5.png',
    type: 'games',
    price: 499.99,
  },
  {
    name: 'Samsung Galaxy',
    url: 'images/samsung_galaxy.png',
    type: 'smartphones',
    price: 399.99,
  },
  {
    name: 'Cannon EOS Camera',
    url: 'images/cannon_eos_camera.png',
    type: 'cameras',
    price: 749.99,
  },
  {
    name: 'Sony A7 Camera',
    url: 'images/sony_a7_camera.png',
    type: 'cameras',
    price: 1999.99,
  },
  {
    name: 'LG TV',
    url: 'images/lg_tv.png',
    type: 'televisions',
    price: 799.99,
  },
  {
    name: 'Nintendo Switch',
    url: 'images/nintendo_switch.png',
    type: 'games',
    price: 299.99,
  },
  {
    name: 'Xbox Series X',
    url: 'images/xbox_series_x.png',
    type: 'games',
    price: 499.99,
  },
  {
    name: 'Samsung TV',
    url: 'images/samsung_tv.png',
    type: 'televisions',
    price: 1099.99,
  },
  {
    name: 'Google Pixel',
    url: 'images/google_pixel.png',
    type: 'smartphones',
    price: 499.99,
  },
  {
    name: 'Sony ZV1F Camera',
    url: 'images/sony_zv1f_camera.png',
    type: 'cameras',
    price: 799.99,
  },
  {
    name: 'Toshiba TV',
    url: 'images/toshiba_tv.png',
    type: 'televisions',
    price: 499.99,
  },
  {
    name: 'iPhone 14',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
];
let cartItemCount = 0;
const productElements = [];
const cartCount = document.getElementById('cart-el');
const filtersContainer = document.getElementById('filter-container');
const searchInput = document.getElementById('search');
const checkboxes = document.querySelectorAll('li input');
const productContainer = document.getElementById('product-container');

products.forEach((product) => {
  const span = document.createElement('span');
  span.className = 'col-span-6 sm:col-span-4 lg:col-span-3 px-5  ';
  span.innerHTML = `
    <div class = "relative w-fit " >
      <img
      class="w-full h-full rounded-lg bg-white"
      src="${product.url}"
      />
      <button
      class=" status bg-black text-white absolute left-0 bottom-[0.1px] right-0 text-center opacity-0 hover:opacity-100 transition-opacity"
      >
      Add To Cart
    </button>
    </div>
      <p>${product.name}</p>
      <strong>${product.price}</strong>`;

  span.querySelector('.status').addEventListener('click', updateCart);
  productElements.push(span);
  productContainer.appendChild(span);

  function filterProducts() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const checkedCategories = Array.from(checkboxes)
      .filter((check) => check.checked)
      .map((check) => check.name);

    productElements.forEach((span1, index) => {
      const product = products[index];

      const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm);
      const isInCheckedCategory =
        checkedCategories.length === 0 ||
        checkedCategories.includes(product.type);

      if (matchesSearchTerm && isInCheckedCategory) {
        span1.classList.remove('hidden');
      } else {
        span1.classList.add('hidden');
      }
    });
  }
  filtersContainer.addEventListener('change', filterProducts);
  searchInput.addEventListener('input', filterProducts);
});

function updateCart(e) {
  const statusEl = e.target;

  if (statusEl.classList.contains('added')) {
    statusEl.classList.remove('added');
    statusEl.innerText = 'Add To Cart';
    statusEl.classList.remove('bg-red-600');
    statusEl.classList.add('bg-gray-800');

    cartItemCount--;
  } else {
    statusEl.classList.add('added');
    statusEl.innerText = 'Remove From Cart';
    statusEl.classList.remove('bg-gray-800');
    statusEl.classList.add('bg-red-600');

    cartItemCount++;
  }

  cartCount.innerHTML = cartItemCount.toString();
}

//  WRITTEN BY COLLINS
