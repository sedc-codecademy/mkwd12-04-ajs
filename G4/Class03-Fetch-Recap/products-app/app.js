console.log("it is alive on saturday");

const productsContainerEl = document.querySelector(".products-container");

const PRODUCTS_URL = "https://fakestoreapi.com/products";

function fetchProducts() {
  fetch(PRODUCTS_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderProductsList(productsContainerEl, data);
    });
}

function renderProductsList(containerEl, productsData) {
  let productsHTML = "";

  for (let product of productsData) {
    // Every card should contain the id, title, price, description and image
    productsHTML += `
    <div class="product-card">
      <h3>${product.id}. ${product.title}</h3>
      <h4>Price: $${product.price}</h4>
      <img src="${product.image}" alt="" />
      <p>${product.description}</p>
    </div>
    `;
  }

  containerEl.innerHTML = productsHTML;
}

fetchProducts();
