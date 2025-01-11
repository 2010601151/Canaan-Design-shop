document.addEventListener('DOMContentLoaded', () => {
    let cart = [];
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');
    const cartModal = document.getElementById('cart-modal');
    const closeCartBtn = document.getElementById('close-cart');
    const checkoutBtn = document.getElementById('checkout-button');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Function to update the cart count in the header
    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    // Function to update the cart display
    function updateCartDisplay() {
        cartItemsList.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            cartItemsList.appendChild(li);
            total += parseFloat(item.price);
        });

        cartTotal.textContent = total.toFixed(2);
    }

    // Function to handle Add to Cart
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            const productPrice = button.getAttribute('data-price');

            if (productName && productPrice) {
                cart.push({ name: productName, price: productPrice });
                updateCartCount();
                console.log(`Added to cart: ${productName}, $${productPrice}`);
            } else {
                console.error("Missing product details");
            }
        });
    });

    // Open Cart Modal
    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'flex';
        updateCartDisplay();
    });

    // Close Cart Modal
    closeCartBtn.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    // Proceed to Checkout (just a placeholder for now)
    checkoutBtn.addEventListener('click', () => {
        alert("Proceeding to Checkout...");
    });
});
