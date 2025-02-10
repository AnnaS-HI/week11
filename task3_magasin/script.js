const products = document.querySelectorAll('.product');
const applyDiscountButton = document.getElementById('applyDiscountButton');
const totalPriceElement = document.getElementById('totalPrice');

let total = 0;
let discountApplied = false;

function calculateTotal() {
    total = 0;
    products.forEach(product => {
        const price = parseFloat(product.querySelector('.product-price').getAttribute('data-price'));
        total += price;
    });
    updateTotalPrice();
}

function updateTotalPrice() {
    totalPriceElement.textContent = total + "₽";
}

function applyDiscount() {
    if (discountApplied) return; 

    products.forEach(product => {
        const priceElement = product.querySelector('.product-price');
        const originalPrice = parseFloat(priceElement.getAttribute('data-price'));
        const discountedPrice = originalPrice * 0.8; 
        priceElement.textContent = discountedPrice.toFixed(2) + "₽"; 
        priceElement.setAttribute('data-price', discountedPrice.toFixed(2)); 
    });

    total *= 0.8; 
    updateTotalPrice();

    discountApplied = true; 
}

applyDiscountButton.addEventListener('click', applyDiscount);
calculateTotal();
