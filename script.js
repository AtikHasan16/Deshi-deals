// Function for get ID

function getId(id) {
  const getId = Number(document.getElementById(id).innerText);
  return getId;
}
// Function to set ID for total price
function setIdTotalPrice(value) {
  const totalPrice = (document.getElementById("total-price").innerText = value);
  return totalPrice;
}
// function for last Total
function setIdLastTotal(value) {
  const lastTotal = (document.getElementById("last-total").innerText = value);
  return lastTotal;
}
// function for quantity
function setQuantity(value) {
  const productQuantity = (document.getElementById(
    "product-quantity"
  ).innerText = value);
}
document.getElementById("add-btn-1").addEventListener("click", function () {
  const productName = document.getElementById("product-name").innerText;
  const kitchenPrice = getId("card-price-1");
  let productQuantity = getId("product-quantity");
  let totalPrice = getId("total-price");
  const lastTotal = getId("last-total");
  const discountPrice = getId("discount-price");
  setIdTotalPrice(kitchenPrice + totalPrice);
  setIdLastTotal(kitchenPrice + totalPrice - discountPrice);
  setQuantity((productQuantity = productQuantity + 1));
  const addProduct = document.createElement("div");
  addProduct.innerHTML = `
  <div
  class="card card-side bg-gray-200 shadow-sm h-[130px] p-4 justify-between mb-5"
  >
  <figure class="">
  <img src="assets/kitchen-1.png" alt="Movie" />
  </figure>
  <div class="text-xl font-medium">
  <h1>${productName} </h1>
  <p> ${kitchenPrice} TK</p>
  </div>
  </div>
  `;

  const sideContainer = document.getElementById("add-container");

  sideContainer.appendChild(addProduct);
});
document.getElementById("add-btn-2").addEventListener("click", function () {
  const productName = document.getElementById("product-name-2").innerText;
  const kitchenPrice = getId("card-price-2");
  let productQuantity = getId("product-quantity");
  let totalPrice = getId("total-price");
  const lastTotal = getId("last-total");
  const discountPrice = getId("discount-price");
  setIdTotalPrice(kitchenPrice + totalPrice);
  setIdLastTotal(kitchenPrice + totalPrice - discountPrice);
  setQuantity((productQuantity = productQuantity + 1));
  const addProduct = document.createElement("div");
  addProduct.innerHTML = `
  <div
  class="card card-side bg-gray-200 shadow-sm h-[130px] p-4 justify-between mb-5"
  >
  <figure class="">
  <img src="assets/kitchen-2.png" alt="Movie" />
  </figure>
  <div class="text-xl font-medium">
  <h1>${productName} </h1>
  <p> ${kitchenPrice} TK</p>
  </div>
  </div>
  `;

  const sideContainer = document.getElementById("add-container");

  sideContainer.appendChild(addProduct);
});
