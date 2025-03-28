// Product data
const products = {
    1: {
        id: 1,
        name: 'Smartphone Pro X',
        price: 45000,
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
        description: 'Latest smartphone with advanced features',
        reviews: [
            { id: 1, user: 'John Doe', rating: 5, comment: 'Great phone with excellent camera quality!', date: '2024-03-20' },
            { id: 2, user: 'Jane Smith', rating: 4, comment: 'Good battery life and fast performance.', date: '2024-03-18' }
        ],
        averageRating: 4.5,
        totalReviews: 2
    },
    2: {
        id: 2,
        name: 'Wireless Headphones',
        price: 12000,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        description: 'Premium sound quality with noise cancellation',
        reviews: [
            { id: 3, user: 'Mike Johnson', rating: 5, comment: 'Best headphones I\'ve ever used!', date: '2024-03-15' }
        ],
        averageRating: 5,
        totalReviews: 1
    },
    3: {
        id: 3,
        name: 'Smart Watch',
        price: 15000,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        description: 'Track your fitness and stay connected',
        reviews: [
            { id: 4, user: 'Sarah Wilson', rating: 4, comment: 'Great fitness tracking features!', date: '2024-03-10' },
            { id: 5, user: 'Tom Brown', rating: 3, comment: 'Battery life could be better.', date: '2024-03-05' }
        ],
        averageRating: 3.5,
        totalReviews: 2
    },
    4: {
        id: 4,
        name: 'Tablet Pro',
        price: 35000,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        description: 'Perfect for work and entertainment',
        reviews: [],
        averageRating: 0,
        totalReviews: 0
    }
};

// Shopping cart
let cart = [];

// User Authentication
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));
const profileModal = new bootstrap.Modal(document.getElementById('profileModal'));

// DOM Elements
const cartBtn = document.getElementById('cartBtn');
const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// DOM Elements for Auth
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const profileForm = document.getElementById('profileForm');

// Event Listeners
cartBtn.addEventListener('click', () => {
    updateCartDisplay();
    cartModal.show();
});

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = e.target.dataset.id;
        addToCart(productId);
    });
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    proceedToCheckout();
});

// Event Listeners for Auth
loginBtn.addEventListener('click', () => {
    if (currentUser) {
        showProfile();
    } else {
        loginModal.show();
    }
});

logoutBtn.addEventListener('click', () => {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAuthUI();
    showToast('Logged out successfully');
});

showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.hide();
    registerModal.show();
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.hide();
    loginModal.show();
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Demo authentication (in real app, this would be handled by a backend)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateAuthUI();
        loginModal.hide();
        showProfile();
    } else {
        alert('Invalid email or password');
    }
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Demo registration (in real app, this would be handled by a backend)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(u => u.email === email)) {
        alert('Email already registered');
        return;
    }

    const newUser = { name, email, password, phone: '' };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    updateAuthUI();
    registerModal.hide();
    showProfile();
});

profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('editName').value;
    const email = document.getElementById('editEmail').value;
    const phone = document.getElementById('editPhone').value;

    // Update user profile
    currentUser = { ...currentUser, name, email, phone };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    // Update users list
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
    }

    updateProfileDisplay();
    alert('Profile updated successfully');
});

// Functions
function addToCart(productId) {
    const product = products[productId];
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    
    updateCartCount();
    updateProductCardQuantity(productId);
    showToast('Item added to cart!');
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    let total = 0;
    
    cartItems.innerHTML = cart.map(item => {
        const product = products[item.id];
        const itemTotal = product.price * item.quantity;
        total += itemTotal;
        
        return `
            <div class="cart-item">
                <img src="${product.image}" alt="${product.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h6>${product.name}</h6>
                    <p class="text-muted">$${product.price.toFixed(2)}</p>
                    <div class="quantity-controls">
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity('${item.id}', -1)">-</button>
                        <span class="mx-2">${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity('${item.id}', 1)">+</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    cartTotal.textContent = `$${total.toFixed(2)}`;
    updateCartCount();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        updateCartDisplay();
        updateProductCardQuantity(productId);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartDisplay();
}

function showAddToCartAnimation(productId) {
    const button = document.querySelector(`[data-id="${productId}"]`);
    button.innerHTML = '<i class="bi bi-check"></i> Added';
    button.classList.add('btn-success');
    button.classList.remove('btn-primary');

    setTimeout(() => {
        button.innerHTML = 'Add to Cart';
        button.classList.remove('btn-success');
        button.classList.add('btn-primary');
    }, 2000);
}

function proceedToCheckout() {
    if (!currentUser) {
        alert('Please login to proceed with checkout');
        loginModal.show();
        return;
    }

    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Calculate total and cashback
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cashback = total * 0.04; // 4% cashback

    // Create order summary
    const orderSummary = cart.map(item => 
        `${item.name} x${item.quantity} = ৳${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');

    // Show order confirmation with cashback
    const confirmationMessage = `
Order Summary:
${orderSummary}

Total: ৳${total.toLocaleString()}
Cashback (4%): ৳${cashback.toLocaleString()}
Final Price: ৳${(total - cashback).toLocaleString()}

Thank you for your purchase! Your cashback will be credited to your TakaBack account.
    `;

    // Store order in localStorage for demo purposes
    const order = {
        id: `ORDER-${Date.now()}`,
        userEmail: currentUser.email,
        items: cart,
        total,
        cashback,
        finalPrice: total - cashback,
        timestamp: new Date().toISOString()
    };

    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Show confirmation and clear cart
    alert(confirmationMessage);
    cart = [];
    updateCartCount();
    cartModal.hide();
    updateProfileDisplay();
}

// Auth UI Functions
function updateAuthUI() {
    if (currentUser) {
        loginBtn.innerHTML = `<i class="bi bi-person"></i> ${currentUser.name}`;
        loginBtn.classList.add('btn-light');
        loginBtn.classList.remove('btn-outline-light');
        logoutBtn.classList.remove('d-none');
    } else {
        loginBtn.innerHTML = 'Login';
        loginBtn.classList.remove('btn-light');
        loginBtn.classList.add('btn-outline-light');
        logoutBtn.classList.add('d-none');
    }
}

function showProfile() {
    updateProfileDisplay();
    profileModal.show();
}

function updateProfileDisplay() {
    if (!currentUser) return;

    document.getElementById('profileName').textContent = currentUser.name;
    document.getElementById('profileEmail').textContent = currentUser.email;
    document.getElementById('editName').value = currentUser.name;
    document.getElementById('editEmail').value = currentUser.email;
    document.getElementById('editPhone').value = currentUser.phone || '';

    // Update orders list
    const orders = JSON.parse(localStorage.getItem('orders') || '[]')
        .filter(order => order.userEmail === currentUser.email);
    
    const ordersList = document.getElementById('ordersList');
    if (orders.length === 0) {
        ordersList.innerHTML = '<p class="text-center">No orders found</p>';
    } else {
        ordersList.innerHTML = orders.map(order => `
            <div class="card mb-3">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <h6 class="card-title">Order #${order.id}</h6>
                        <small class="text-muted">${new Date(order.timestamp).toLocaleDateString()}</small>
                    </div>
                    <div class="mt-2">
                        ${order.items.map(item => `
                            <div class="d-flex justify-content-between">
                                <span>${item.name} x${item.quantity}</span>
                                <span>৳${(item.price * item.quantity).toLocaleString()}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="mt-2 pt-2 border-top">
                        <div class="d-flex justify-content-between">
                            <span>Total:</span>
                            <span>৳${order.total.toLocaleString()}</span>
                        </div>
                        <div class="d-flex justify-content-between text-success">
                            <span>Cashback (4%):</span>
                            <span>৳${order.cashback.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update total cashback
    const totalCashback = orders.reduce((sum, order) => sum + order.cashback, 0);
    document.getElementById('totalCashback').textContent = `৳${totalCashback.toLocaleString()}`;
}

// Add wishlist functionality
function toggleWishlist(productId) {
    if (!currentUser) {
        alert('Please login to add items to your wishlist');
        loginModal.show();
        return;
    }

    const index = wishlist.indexOf(productId);
    if (index === -1) {
        wishlist.push(productId);
    } else {
        wishlist.splice(index, 1);
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
}

function updateWishlistUI() {
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    wishlistButtons.forEach(button => {
        const productId = parseInt(button.dataset.id);
        if (wishlist.includes(productId)) {
            button.innerHTML = '<i class="bi bi-heart-fill"></i>';
            button.classList.add('text-danger');
        } else {
            button.innerHTML = '<i class="bi bi-heart"></i>';
            button.classList.remove('text-danger');
        }
    });
}

// Add review functionality
function addReview(productId, rating, comment) {
    if (!currentUser) {
        alert('Please login to add a review');
        loginModal.show();
        return;
    }

    const product = products[productId];
    const newReview = {
        id: Date.now(),
        user: currentUser.name,
        rating: rating,
        comment: comment,
        date: new Date().toISOString().split('T')[0]
    };

    product.reviews.push(newReview);
    product.totalReviews = product.reviews.length;
    product.averageRating = product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.totalReviews;

    updateProductDisplay(productId);
}

function updateProductDisplay(productId) {
    const product = products[productId];
    const productCard = document.querySelector(`[data-product-id="${productId}"]`);
    if (!productCard) return;

    const ratingHtml = `
        <div class="rating mb-2">
            ${generateStarRating(product.averageRating)}
            <small class="text-muted">(${product.totalReviews} reviews)</small>
        </div>
    `;

    const reviewsHtml = `
        <div class="reviews mt-3">
            <h6>Reviews</h6>
            ${product.reviews.map(review => `
                <div class="review-item">
                    <div class="d-flex justify-content-between">
                        <strong>${review.user}</strong>
                        <small class="text-muted">${review.date}</small>
                    </div>
                    <div class="rating">${generateStarRating(review.rating)}</div>
                    <p class="mb-0">${review.comment}</p>
                </div>
            `).join('')}
            <button class="btn btn-sm btn-outline-primary mt-2" onclick="showReviewModal(${productId})">
                Add Review
            </button>
        </div>
    `;

    const ratingContainer = productCard.querySelector('.rating-container');
    if (ratingContainer) {
        ratingContainer.innerHTML = ratingHtml;
    }

    const reviewsContainer = productCard.querySelector('.reviews-container');
    if (reviewsContainer) {
        reviewsContainer.innerHTML = reviewsHtml;
    }
}

function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="bi bi-star-fill text-warning"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="bi bi-star-half text-warning"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="bi bi-star text-warning"></i>';
    }
    
    return stars;
}

function showReviewModal(productId) {
    const product = products[productId];
    const modal = document.getElementById('reviewModal');
    const modalContent = modal.querySelector('.modal-body');
    
    modalContent.innerHTML = `
        <form id="reviewForm" onsubmit="submitReview(event, ${productId})">
            <div class="mb-3">
                <label class="form-label">Rating</label>
                <div class="rating-input">
                    ${[1, 2, 3, 4, 5].map(num => `
                        <i class="bi bi-star rating-star" data-rating="${num}"></i>
                    `).join('')}
                </div>
                <input type="hidden" id="ratingValue" required>
            </div>
            <div class="mb-3">
                <label for="reviewComment" class="form-label">Your Review</label>
                <textarea class="form-control" id="reviewComment" rows="3" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit Review</button>
        </form>
    `;

    // Add star rating interaction
    const stars = modalContent.querySelectorAll('.rating-star');
    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            const rating = parseInt(star.dataset.rating);
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('bi-star-fill', 'text-warning');
                } else {
                    s.classList.remove('bi-star-fill', 'text-warning');
                }
            });
        });
    });

    modalContent.querySelector('.rating-input').addEventListener('mouseleave', () => {
        stars.forEach(star => {
            star.classList.remove('bi-star-fill', 'text-warning');
        });
    });

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.dataset.rating);
            document.getElementById('ratingValue').value = rating;
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('bi-star-fill', 'text-warning');
                } else {
                    s.classList.remove('bi-star-fill', 'text-warning');
                }
            });
        });
    });

    new bootstrap.Modal(modal).show();
}

function submitReview(event, productId) {
    event.preventDefault();
    const rating = parseInt(document.getElementById('ratingValue').value);
    const comment = document.getElementById('reviewComment').value;
    
    addReview(productId, rating, comment);
    bootstrap.Modal.getInstance(document.getElementById('reviewModal')).hide();
}

// Function to update product card quantity display
function updateProductCardQuantity(productId) {
    const productCard = document.querySelector(`[data-product-id="${productId}"]`);
    const quantityBadge = productCard.querySelector('.cart-quantity-badge');
    const cartItem = cart.find(item => item.id === productId);
    
    if (cartItem && cartItem.quantity > 0) {
        quantityBadge.textContent = cartItem.quantity;
        quantityBadge.style.display = 'block';
    } else {
        quantityBadge.style.display = 'none';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateAuthUI();
    updateWishlistUI();
    
    // Initialize product card quantity badges
    Object.keys(products).forEach(productId => {
        updateProductCardQuantity(productId);
    });
}); 