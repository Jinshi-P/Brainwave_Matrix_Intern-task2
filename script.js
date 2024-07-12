const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
  const query = prompt("Search...");
  if (query !== null && query.trim() !== "") {
    performSearch(query);
  } else {
    alert("Please enter a search term.");
  }
});

function performSearch(query) {
  console.log("Performing search for:", query);
}

// cart

let cart = [];
let cartItemCount = 0;

// Function to add item to cart
function addToCart(name, price) {
  // Check if item is already in cart
  const itemInCart = cart.find((item) => item.name === name);

  if (itemInCart) {
    // If item is already in cart, increase quantity
    itemInCart.quantity++;
  } else {
    // If item is not in cart, add it
    cart.push({ name: name, price: price, quantity: 1 });
  }

  // Update cart icon and count
  updateCartIcon();
}

// Function to update cart icon and count
function updateCartIcon() {
  const cartItemCountElement = document.getElementById("cartItemCount");
  cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  cartItemCountElement.textContent = cartItemCount;
}

// Event listener for Add to Cart buttons
const addToCartButtons = document.querySelectorAll("#addtocart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.parentElement;
    const name = card.querySelector(".card-title").textContent.trim();
    const price = parseFloat(
      card.querySelector(".card-text").textContent.replace(/[^0-9.-]+/g, "")
    );
    addToCart(name, price);
  });
});

// Cart state variables

// Function to add item to cart
function addToCart(name, price) {
  // Check if item is already in cart
  const itemInCart = cart.find((item) => item.name === name);

  if (itemInCart) {
    // If item is already in cart, increase quantity
    itemInCart.quantity++;
  } else {
    // If item is not in cart, add it
    cart.push({ name: name, price: price, quantity: 1 });
  }

  // Update cart icon and count
  updateCartIcon();
}

// Function to update cart icon and count
function updateCartIcon() {
  const cartItemCountElement = document.getElementById("cartItemCount");
  cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  cartItemCountElement.textContent = cartItemCount;
}

// Function to display cart items in modal
function displayCartItems() {
  const cartItemsList = document.getElementById("cartItemsList");
  cartItemsList.innerHTML = "";

  cart.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");
    itemElement.innerHTML = `
            <div>${item.name}</div>
            <div>Quantity: ${item.quantity}</div>
            <div>Price: Rs${item.price.toFixed(2)}</div>
        `;
    cartItemsList.appendChild(itemElement);
  });
}

const cartIcon = document.getElementById("cartIcon");
cartIcon.addEventListener("click", function () {
  displayCartItems();
  const cartModal = new bootstrap.Modal(document.getElementById("cartModal"));
  cartModal.show();
});

// Event listener for Add to Cart buttons

addToCartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.parentElement;
    const name = card.querySelector(".card-title").textContent.trim();
    const price = parseFloat(
      card.querySelector(".card-text").textContent.replace(/[^0-9.-]+/g, "")
    );
    addToCart(name, price);
  });
});
