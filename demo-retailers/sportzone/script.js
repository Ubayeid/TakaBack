// Store configuration
const STORE_NAME = "SportZone";
const CASHBACK_RATE = 2;

// Product data
const products = {
    // Fashionista products
    fashionista: {
        'casual-shirt': {
            id: 'casual-shirt',
            name: 'Casual Cotton Shirt',
            price: 29.99,
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            description: 'Comfortable cotton shirt perfect for everyday wear',
            reviews: [],
            averageRating: 0,
            totalReviews: 0
        },
        'denim-jeans': {
            id: 'denim-jeans',
            name: 'Classic Denim Jeans',
            price: 59.99,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            description: 'Classic fit denim jeans with comfortable stretch',
            reviews: [],
            averageRating: 0,
            totalReviews: 0
        }
    },
    // FreshMart products
    freshmart: {
        'organic-bananas': {
            id: 'organic-bananas',
            name: 'Organic Bananas',
            price: 2.99,
            image: 'https://images.unsplash.com/photo-1543218024-57a70143c369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            description: 'Fresh organic bananas, perfect for healthy snacking',
            reviews: [],
            averageRating: 0,
            totalReviews: 0
        },
        'whole-milk': {
            id: 'whole-milk',
            name: 'Whole Milk',
            price: 3.99,
            image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            description: 'Fresh whole milk from local dairy farms',
            reviews: [],
            averageRating: 0,
            totalReviews: 0
        }
    },
    // Beauty Store products
    beautystore: {
        'face-cream': {
            id: 'face-cream',
            name: 'Hydrating Face Cream',
            price: 24.99,
            image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            description: 'Moisturizing face cream with natural ingredients',
            reviews: [],
            averageRating: 0,
            totalReviews: 0
        },
        'lipstick': {
            id: 'lipstick',
            name: 'Matte Lipstick',
            price: 19.99,
            image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            description: 'Long-lasting matte lipstick in various shades',
            reviews: [],
            averageRating: 0,
            totalReviews: 0
        }
    }
};

// Shopping cart
let cart = JSON.parse(localStorage.getItem('cart')) || {};
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || {};

// DOM Elements
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const wishlistCount = document.getElementById('wishlistCount');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateWishlistCount();
    displayProducts();
    updateCartDisplay();
});

// Display products
function displayProducts() {
    const productsContainer = document.getElementById('products');
    if (!productsContainer) return;

    const storeProducts = products[STORE_NAME.toLowerCase()] || {};
    productsContainer.innerHTML = Object.values(storeProducts).map(product => `
        <div class="col-md-4 mb-4">
            <div class="card product-card">
                <div class="position-relative">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <button class="btn btn-light wishlist-btn position-absolute top-0 end-0 m-2" 
                            onclick="toggleWishlist('${product.id}')">
                        <i class="bi bi-heart"></i>
                    </button>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="h5 mb-0">$${product.price.toFixed(2)}</span>
                        <button class="btn btn-primary" onclick="addToCart('${product.id}')">
                            Add to Cart
                        </button>
                    </div>
                    <div class="mt-2">
                        <div class="rating">
                            ${generateStarRating(product.averageRating)}
                            <small class="text-muted">(${product.totalReviews} reviews)</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Cart functions
function addToCart(productId) {
    const product = products[STORE_NAME.toLowerCase()][productId];
    if (!product) return;

    cart[productId] = (cart[productId] || 0) + 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
    showToast('Product added to cart!');
}

function removeFromCart(productId) {
    delete cart[productId];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
    showToast('Product removed from cart!');
}

function updateCartCount() {
    const count = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
    cartCount.textContent = count;
}

function updateCartDisplay() {
    if (!cartItems) return;

    const storeProducts = products[STORE_NAME.toLowerCase()] || {};
    cartItems.innerHTML = Object.entries(cart).map(([productId, quantity]) => {
        const product = storeProducts[productId];
        if (!product) return '';

        return `
            <div class="cart-item">
                <img src="${product.image}" alt="${product.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h6>${product.name}</h6>
                    <p class="mb-0">$${product.price.toFixed(2)} x ${quantity}</p>
                </div>
                <div class="cart-item-actions">
                    <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart('${productId}')">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    const total = Object.entries(cart).reduce((sum, [productId, quantity]) => {
        const product = storeProducts[productId];
        return sum + (product ? product.price * quantity : 0);
    }, 0);

    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Wishlist functions
function toggleWishlist(productId) {
    if (wishlist[productId]) {
        delete wishlist[productId];
    } else {
        wishlist[productId] = true;
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    displayProducts();
    showToast(wishlist[productId] ? 'Added to wishlist!' : 'Removed from wishlist!');
}

function updateWishlistCount() {
    const count = Object.keys(wishlist).length;
    wishlistCount.textContent = count;
}

// Review functions
function addReview(productId, rating, comment) {
    const product = products[STORE_NAME.toLowerCase()][productId];
    if (!product) return;

    const review = {
        rating,
        comment,
        date: new Date().toISOString()
    };

    product.reviews.push(review);
    product.totalReviews = product.reviews.length;
    product.averageRating = product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.totalReviews;

    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();
    showToast('Review added successfully!');
}

function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<i class="bi bi-star-fill text-warning"></i>';
        } else if (i === fullStars && hasHalfStar) {
            stars += '<i class="bi bi-star-half text-warning"></i>';
        } else {
            stars += '<i class="bi bi-star text-warning"></i>';
        }
    }

    return stars;
}

// Utility functions
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast position-fixed bottom-0 end-0 m-3';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    toast.innerHTML = `
        <div class="toast-header">
            <strong class="me-auto">${STORE_NAME}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            ${message}
        </div>
    `;
    document.body.appendChild(toast);
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
    toast.addEventListener('hidden.bs.toast', () => toast.remove());
}

// Checkout function
function proceedToCheckout() {
    const storeProducts = products[STORE_NAME.toLowerCase()] || {};
    const total = Object.entries(cart).reduce((sum, [productId, quantity]) => {
        const product = storeProducts[productId];
        return sum + (product ? product.price * quantity : 0);
    }, 0);

    const cashback = total * (CASHBACK_RATE / 100);
    const orderSummary = {
        store: STORE_NAME,
        items: Object.entries(cart).map(([productId, quantity]) => ({
            product: storeProducts[productId],
            quantity
        })),
        total,
        cashback,
        date: new Date().toISOString()
    };

    // Store order in localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(orderSummary);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear cart
    cart = {};
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();

    // Show confirmation
    showToast(`Order placed successfully! You earned $${cashback.toFixed(2)} in cashback!`);
} 
