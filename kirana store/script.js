// --- DATA ---
const categories = [
  { id: 'fv', name: "Fruits & Veggies",      image: "image/veg.jpg" },
    { id: 'fm', name: "Foodgrains ",   image: "image/foodgrain.jpg" },
    { id: 'bd', name: "Bakery & Dairy",        image: "image/bakery.jpg" },
    { id: 'sn', name: "Snacks",                image: "image/snacks.jpg" },
    { id: 'bv', name: "Drinks",             image: "image/drink.jpg" },
{ id: 'df', name: "Dry Fruits",            image: "image/dryfruit.jpg" },
{ id: 'dn', name: "Daily Need",            image: "image/dailyneed.jpg" },
{ id: 'ma', name: "Masala",            image: "image/masala.jpg" },
];
const products = [
    { id: 1, name: "Fresh Red Onion", category: "Fruits & Veggies", price: 35, unit: "1 kg", image: "image/masala.jpg", discount: 25 },
    { id: 2, name: "Farm Potatoes", category: "Fruits & Veggies", price: 40, unit: "1 kg", image: "image/masala.jpg", discount: 10 },
    { id: 3, name: "Fresh Tomatoes", category: "Fruits & Veggies", price: 25, unit: "1 kg", image: "image/masala.jpg", discount: 5 },
    { id: 11, name: "Green Chili", category: "Fruits & Veggies", price: 15, unit: "200 g", image: "image/masala.jpg", discount: 0 },
    { id: 4, name: "Sliver Coin Wheat Atta", category: "Foodgrains", price: 450, unit: "10 kg", image: "image/masala.jpg", discount: 15 },
    { id: 5, name: "Toor Dal", category: "Foodgrains ", price: 140, unit: "1 kg", image: "image/masala.jpg", discount: 0 },
    { id: 6, name: "Amul Butter", category: "Bakery & Dairy", price: 56, unit: "100 g", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=400&auto=format&fit=crop", discount: 2 },
    { id: 7, name: "Amul Milk", category: "Bakery & Dairy", price: 32, unit: "500 ml", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=400&auto=format&fit=crop", discount: 0 },
    { id: 9, name: "Maggi", category: "Snacks", price: 14, unit: "70 g", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=400&auto=format&fit=crop", discount: 0 },
    { id: 10, name: "Mazza", category: "Drinks", price: 650, unit: "1 kg", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=400&auto=format&fit=crop", discount: 20 },
    { id: 23, name: "Premium Almonds (Badam)", category: "Dry Fruits", price: 850, unit: "500 g", image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=400&auto=format&fit=crop", discount: 10 },
    { id: 24, name: "Whole Cashews (Kaju)", category: "Dry Fruits", price: 750, unit: "500 g", image: "https://images.unsplash.com/photo-1536591375315-196000ea3678?q=80&w=400&auto=format&fit=crop", discount: 5 },
    { id: 25, name: "Golden Raisins (Kishmish)", category: "Dry Fruits", price: 250, unit: "250 g", image: "https://images.unsplash.com/photo-1595413693240-3b942e979a40?q=80&w=400&auto=format&fit=crop", discount: 0 },
    { id: 26, name: "Walnut Kernels (Akhrot)", category: "Dry Fruits", price: 600, unit: "250 g", image: "https://images.unsplash.com/photo-1594046243098-0fceea9d451e?q=80&w=400&auto=format&fit=crop", discount: 15 },
    { id: 27, name: "Roasted Pistachios (Pista)", category: "Dry Fruits", price: 900, unit: "500 g", image: "https://images.unsplash.com/photo-1615485925763-867862f80a30?q=80&w=400&auto=format&fit=crop", discount: 5 },
    { id: 28, name: "Taj Tea", category: "Daily Need", price: 320, unit: "500 g", image: "https://images.unsplash.com/photo-1589123053646-4e0c8b4172a6?q=80&w=400&auto=format&fit=crop", discount: 0 },
    { id: 29, name: "Silver Coin Rava", category: "Daily Need", price: 85, unit: "500 g", image: "https://images.unsplash.com/photo-1589123053646-4e0c8b4172a6?q=80&w=400&auto=format&fit=crop", discount: 0 },
    { id: 30, name: "Poha", category: "Daily Need", price: 55, unit: "500 g", image: "https://images.unsplash.com/photo-1589123053646-4e0c8b4172a6?q=80&w=400&auto=format&fit=crop", discount: 0 },
    { id: 31, name: "Sugar", category: "Daily Need", price: 40, unit: "500 g", image: "https://images.unsplash.com/photo-1589123053646-4e0c8b4172a6?q=80&w=400&auto=format&fit=crop", discount: 0 },
    { id: 32, name: "Tata Salt", category: "Daily Need", price: 20, unit: "500 g", image: "https://images.unsplash.com/photo-1589123053646-4e0c8b4172a6?q=80&w=400&auto=format&fit=crop", discount: 0 },
    { id: 33, name: "Lays Chips", category: "Snacks", price: 100, unit: "500 g", image: "https://images.unsplash.com/photo-1589123053646-4e0c8b4172a6?q=80&w=400&auto=format&fit=crop", discount: 0 },
    { id: 34, name: "Balaji Chips", category: "Snacks", price: 90, unit: "500 g", image: "https://images.unsplash.com/photo-1589123053646-4e0c8b4172a6?q=80&w=400&auto=format&fit=crop", discount: 0 },
    { id: 35, name: "Bikaji Bhujiya", category: "Snacks", price: 175, unit: "500 g", image: "https://images.unsplash.com/photo-1589123053646-4e0c8b4172a6?q=80&w=400&auto=format&fit=crop", discount: 0 },
    { id: 36, name: "Chitale Bakarwadi", category: "Snacks", price: 350, unit: "500 g", image: "https://images.unsplash.com/photo-1589123053646-4e0c8b4172a6?q=80&w=400&auto=format&fit=crop", discount: 0 },
     { id: 37, name: "Apple", category: "Fruits & Veggiess", price: 150, unit: "500 g", image: "https://images.unsplash.com/photo-1589123053646-4e0c8b4172a6?q=80&w=400&auto=format&fit=crop", discount: 0 },
     { id: 38, name: "Banana", category: "Fruits & Veggiess", price: 50, unit: "1 dozen", image: "https://images.unsplash.com/photo-1589123053646-4e0c8b4172a6?q=80&w=400&auto=format&fit=crop", discount: 0 },
    { id: 39, name: "Orange", category: "Fruits & Veggiess", price: 120, unit: "1 kg", image: "https://images.unsplash.com/photo-1589123053646-4e0c8b4172a6?q=80&w=400&auto=format&fit=crop", discount: 0 },
    { id: 40, name: "Coca Cola", category: "Drinks", price: 40, unit: "100 ml", image: "https://images.unsplash.com/photo-1589123053646-4e0c8b4172a6?q=80&w=400&auto=format&fit=crop", discount: 0 },
    { id: 41, name: "Amul Cool", category: "Drinks", price: 25, unit: "60 ml", image: "https://images.unsplash.com/photo-1589123053646-4e0c8b4172a6?q=80&w=400&auto=format&fit=crop", discount: 0 },
    { id: 42, name: "Red chilli Powder", category: "Masala", price: 325, unit: "1 kg", image: "https://images.unsplash.com/photo-1589123053646-4e0c8b4172a6?q=80&w=400&auto=format&fit=crop", discount: 0 },
      { id: 42, name: "Turmeric", category: "Masala", price: 240, unit: "1 kg", image: "https://images.unsplash.com/photo-1589123053646-4e0c8b4172a6?q=80&w=400&auto=format&fit=crop", discount: 0 },
  { id: 42, name: "Butter Milk", category: "Bakery & Dairy", price: 120, unit: "200 g", image: "https://images.unsplash.com/photo-1589123053646-4e0c8b4172a6?q=80&w=400&auto=format&fit=crop", discount: 0 },
  { id: 42, name: "Amul Chess", category: "Bakery & Dairy", price: 70, unit: "100 ml", image: "https://images.unsplash.com/photo-1589123053646-4e0c8b4172a6?q=80&w=400&auto=format&fit=crop", discount: 0 },

    ];

// --- HERO SLIDER DATA & LOGIC ---
const heroImages = [
    "OIP.jpeg",
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1588964895597-a51e21f816d0?auto=format&fit=crop&q=80&w=1000"
];
let currentHeroImage = 0;

function startHeroSlider() {
    const heroSection = document.getElementById('hero-slider');
    if (!heroSection) return;

    // Set initial image
    heroSection.style.backgroundImage = `url('${heroImages[0]}')`;

    setInterval(() => {
        currentHeroImage = (currentHeroImage + 1) % heroImages.length;
        heroSection.style.backgroundImage = `url('${heroImages[currentHeroImage]}')`;
    }, 3000); 
}

// State
let cart = [];
let isLoggedIn = false;
let pendingCheckout = false;
let savedUser = { name: '', mobile: '', address: '', city: '', pincode: '' };

// --- RENDER FUNCTIONS ---
function init() {
    lucide.createIcons();
    renderCategories();
    renderBestDeals();
    updateCartUI();
    startHeroSlider(); 
    
    setTimeout(() => {
        const modal = document.getElementById('welcome-modal');
        if(modal) modal.classList.remove('hidden');
    }, 800);
}

function closeWelcomeModal() {
    document.getElementById('welcome-modal').classList.add('hidden');
}

function renderCategories() {
    const navContainer = document.getElementById('nav-categories');
    navContainer.innerHTML = categories.map(cat => 
        `<li><button onclick="openCategoryPage('${cat.name}')" class="whitespace-nowrap hover:text-green-600 transition">${cat.name}</button></li>`
    ).join('');
    
    const gridContainer = document.getElementById('category-grid');
    gridContainer.innerHTML = categories.map(cat => `
        <div onclick="openCategoryPage('${cat.name}')" class="category-card cursor-pointer bg-white rounded-lg p-3 text-center border border-transparent hover:border-green-200">
            <img src="${cat.image}" alt="${cat.name}" class="w-full h-24 object-cover rounded-md mb-2">
            <h3 class="text-sm font-semibold text-gray-700">${cat.name}</h3>
        </div>
    `).join('');
}

function openCategoryPage(categoryName) {
    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('category-view').classList.remove('hidden');
    document.getElementById('category-page-title').innerText = categoryName;
    window.scrollTo(0,0);

    const filteredProducts = products.filter(p => p.category === categoryName);
    document.getElementById('category-item-count').innerText = `${filteredProducts.length} items`;

    const container = document.getElementById('category-page-grid');
    if (filteredProducts.length > 0) {
        container.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    } else {
        container.innerHTML = `<div class="col-span-full text-center py-20 text-gray-500">No products found in this category.</div>`;
    }
    lucide.createIcons();
}

function renderHome() {
    document.getElementById('home-view').classList.remove('hidden');
    document.getElementById('category-view').classList.add('hidden');
    document.getElementById('checkout-view').classList.add('hidden');
    window.scrollTo(0,0);
}

function renderBestDeals() {
    const container = document.getElementById('deals-grid');
    const bestDeals = products.filter(p => p.discount >= 10).sort((a,b) => b.discount - a.discount);
    container.innerHTML = bestDeals.map(product => createProductCard(product)).join('');
    lucide.createIcons();
}

function createProductCard(product) {
    const originalPrice = Math.round(product.price * (100 / (100 - product.discount)));
    const inCart = cart.find(c => c.id === product.id);
    const qty = inCart ? inCart.qty : 0;

    return `
    <div class="product-card bg-white rounded-lg border border-gray-200 p-3 flex flex-col h-full relative group">
        ${product.discount > 0 ? `<span class="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded z-10 shadow-sm">${product.discount}% OFF</span>` : ''}
        
        <div class="relative h-40 mb-3 overflow-hidden rounded-md bg-gray-100">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
        </div>
        
        <div class="text-[10px] text-gray-500 mb-1 uppercase tracking-wide">${product.category}</div>
        <h3 class="font-semibold text-gray-800 text-sm mb-1 line-clamp-2 h-10">${product.name}</h3>
        <div class="text-xs text-gray-500 mb-3 bg-gray-50 inline-block px-2 py-1 rounded border border-gray-100 w-fit">${product.unit}</div>
        
        <div class="mt-auto flex items-center justify-between">
            <div>
                <span class="text-base font-bold text-gray-900">₹${product.price}</span>
                ${product.discount > 0 ? `<span class="text-xs text-gray-400 line-through ml-1">₹${originalPrice}</span>` : ''}
            </div>
            
            ${qty > 0 ? `
                <div class="flex items-center bg-green-600 rounded text-white shadow-md">
                    <button onclick="updateQty(${product.id}, -1)" class="px-2 py-1 hover:bg-green-700 transition">-</button>
                    <span class="px-1 text-xs font-bold min-w-[20px] text-center">${qty}</span>
                    <button onclick="updateQty(${product.id}, 1)" class="px-2 py-1 hover:bg-green-700 transition">+</button>
                </div>
            ` : `
                <button onclick="addToCart(${product.id})" class="border border-green-600 text-green-600 hover:bg-green-50 px-4 py-1.5 rounded text-sm font-semibold transition">Add</button>
            `}
        </div>
    </div>
    `;
}

// --- CART LOGIC ---

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push({ ...product, qty: 1 });
    refreshUI();
    showToast(`Added ${product.name} to basket`);
}

function updateQty(id, delta) {
    const itemIndex = cart.findIndex(c => c.id === id);
    if (itemIndex > -1) {
        cart[itemIndex].qty += delta;
        if (cart[itemIndex].qty <= 0) {
            cart.splice(itemIndex, 1);
        }
    }
    refreshUI();
}

function refreshUI() {
    updateCartUI();
    renderBestDeals();
    if (!document.getElementById('category-view').classList.contains('hidden')) {
        const currentTitle = document.getElementById('category-page-title').innerText;
        openCategoryPage(currentTitle);
    }
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    document.getElementById('cart-count').innerText = count;
    document.getElementById('cart-total-display').innerText = '₹' + total;
    document.getElementById('checkout-subtotal').innerText = '₹' + total;
    document.getElementById('checkout-total').innerText = '₹' + Math.round(total);

    const cartContainer = document.getElementById('cart-items-container');
    const checkoutItems = document.getElementById('checkout-items');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `<div class="text-center py-20 text-gray-400"><i data-lucide="shopping-cart" class="w-16 h-16 mx-auto mb-4 opacity-50"></i><p>Your basket is empty</p></div>`;
        checkoutItems.innerHTML = '<p class="text-gray-500">No items</p>';
    } else {
        const html = cart.map(item => `
            <div class="flex gap-3 items-center bg-white p-2 rounded border border-gray-100 shadow-sm">
                <img src="${item.image}" class="w-12 h-12 rounded object-cover">
                <div class="flex-1">
                    <h4 class="text-sm font-semibold text-gray-800 line-clamp-1">${item.name}</h4>
                    <div class="text-xs text-gray-500">₹${item.price} x ${item.qty}</div>
                </div>
                <div class="flex items-center border rounded border-gray-300">
                        <button onclick="updateQty(${item.id}, -1)" class="px-2 text-gray-600 hover:bg-gray-100">-</button>
                        <span class="text-xs px-1 font-medium">${item.qty}</span>
                        <button onclick="updateQty(${item.id}, 1)" class="px-2 text-gray-600 hover:bg-gray-100">+</button>
                </div>
                <button onclick="updateQty(${item.id}, -100)" class="text-gray-400 hover:text-red-500"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
            </div>
        `).join('');
        cartContainer.innerHTML = html;
        
        checkoutItems.innerHTML = cart.map(item => `
            <div class="flex justify-between">
                <span class="text-gray-600">${item.name} <span class="text-xs">x${item.qty}</span></span>
                <span class="font-medium">₹${item.price * item.qty}</span>
            </div>
        `).join('');
    }
    lucide.createIcons();
}

// --- UNIFIED LOGIN LOGIC ---

function handleUnifiedLogin(e) {
    e.preventDefault();
    const name = document.getElementById('login-name').value;
    const mobile = document.getElementById('login-mobile').value;
    const address = document.getElementById('login-address').value;
    const city = document.getElementById('login-city').value;
    const pincode = document.getElementById('login-pincode').value;

    if (name && mobile.length === 10 && address && city && pincode.length === 6) {
        // Save user details
        savedUser = { name, mobile, address, city, pincode };
        isLoggedIn = true;
        
        // Update UI
        document.getElementById('user-name').innerText = name;
        toggleModal('login-modal');
        showToast(`Welcome, ${name}!`);

        // If they were trying to checkout, take them there now
        if (pendingCheckout) {
            pendingCheckout = false;
            proceedToCheckout();
        }
    } else {
        alert("Please fill all details correctly.");
    }
}

// --- ORDER LOGIC ---

function proceedToCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    
    if (!isLoggedIn) {
        pendingCheckout = true;
        toggleModal('cart-modal'); 
        toggleModal('login-modal'); // Force login first
        showToast("Please login/signup to continue");
        return;
    }

    // Pre-fill checkout form with saved details
    document.getElementById('checkout-name').value = savedUser.name;
    document.getElementById('checkout-mobile').value = savedUser.mobile;
    document.getElementById('checkout-address').value = savedUser.address;
    document.getElementById('checkout-city').value = savedUser.city;
    document.getElementById('checkout-pincode').value = savedUser.pincode;

    toggleModal('cart-modal');
    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('category-view').classList.add('hidden');
    document.getElementById('checkout-view').classList.remove('hidden');
    window.scrollTo(0, 0);
}

function placeOrder(e) {
    if(e) e.preventDefault();
    const orderId = Math.floor(10000 + Math.random() * 90000);
    document.getElementById('success-order-id').innerText = '#' + orderId;
    document.getElementById('checkout-view').classList.add('hidden');
    document.getElementById('order-success-modal').classList.remove('hidden');
    cart = [];
    refreshUI();
}

function closeOrderSuccess() {
    document.getElementById('order-success-modal').classList.add('hidden');
    renderHome();
}

// --- UTILS ---

function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    const panel = modal.querySelector('#cart-panel');
    
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        if(panel) setTimeout(() => panel.classList.remove('translate-x-full'), 10);
    } else {
        if(panel) {
            panel.classList.add('translate-x-full');
            setTimeout(() => modal.classList.add('hidden'), 300);
        } else {
            modal.classList.add('hidden');
        }
    }
}

function showCart() {
    const modal = document.getElementById('cart-modal');
    const panel = document.getElementById('cart-panel');
    modal.classList.remove('hidden');
    setTimeout(() => panel.classList.remove('translate-x-full'), 10);
}

function setLocation(loc) {
    document.getElementById('current-location').innerText = loc;
    toggleModal('location-modal');
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg text-sm z-[100] fade-in';
    toast.innerText = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

// --- PAYMENT TOGGLE ---
function togglePaymentDetails() {
    const upiRadio = document.querySelector('input[name="payment"][value="upi"]');
    const upiContainer = document.getElementById('upi-input-container');
    
    if (upiRadio && upiRadio.checked) {
        upiContainer.classList.remove('hidden');
    } else {
        upiContainer.classList.add('hidden');
    }
}

document.getElementById('search-input').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    if (term.length > 0) {
        document.getElementById('home-view').classList.add('hidden');
        document.getElementById('category-view').classList.remove('hidden');
        document.getElementById('category-page-title').innerText = `Search: "${e.target.value}"`;
        
        const filtered = products.filter(p => p.name.toLowerCase().includes(term));
        document.getElementById('category-item-count').innerText = `${filtered.length} items`;
        
        const container = document.getElementById('category-page-grid');
        if (filtered.length > 0) {
            container.innerHTML = filtered.map(product => createProductCard(product)).join('');
        } else {
            container.innerHTML = `<div class="col-span-full text-center py-20 text-gray-500">No products found matching "${e.target.value}"</div>`;
        }
        lucide.createIcons();
    } else {
        renderHome();
    }
});

window.addEventListener('DOMContentLoaded', init);