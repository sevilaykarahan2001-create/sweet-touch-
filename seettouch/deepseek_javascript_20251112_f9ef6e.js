// Products Data
const products = [
    {
        id: 1,
        name: "Çilekli Pasta",
        category: "pasta",
        price: 180,
        description: "Taze çilekler ve vanilyalı kremasıyla",
        icon: "fas fa-birthday-cake"
    },
    {
        id: 2,
        name: "Çikolatalı Pasta",
        category: "pasta",
        price: 200,
        description: "Belçika çikolatası ile hazırlanmış",
        icon: "fas fa-birthday-cake"
    },
    {
        id: 3,
        name: "Red Velvet",
        category: "pasta",
        price: 220,
        description: "Klasik red velvet lezzeti",
        icon: "fas fa-birthday-cake"
    },
    {
        id: 4,
        name: "Vanilyalı Cupcake",
        category: "cupcake",
        price: 25,
        description: "Yumuşacık vanilyalı cupcake",
        icon: "fas fa-cupcake"
    },
    {
        id: 5,
        name: "Çikolatalı Cupcake",
        category: "cupcake",
        price: 28,
        description: "Zengin çikolata tadı",
        icon: "fas fa-cupcake"
    },
    {
        id: 6,
        name: "Çilekli Cupcake",
        category: "cupcake",
        price: 26,
        description: "Taze çilek ile",
        icon: "fas fa-cupcake"
    },
    {
        id: 7,
        name: "Yulaflı Kurabiye",
        category: "cookies",
        price: 15,
        description: "Sağlıklı ve lezzetli",
        icon: "fas fa-cookie"
    },
    {
        id: 8,
        name: "Çikolata Parçacıklı",
        category: "cookies",
        price: 18,
        description: "Bol çikolata parçalı",
        icon: "fas fa-cookie"
    },
    {
        id: 9,
        name: "New York Cheesecake",
        category: "cheesecake",
        price: 240,
        description: "Klasik New York usulü",
        icon: "fas fa-cheese"
    },
    {
        id: 10,
        name: "Frambuazlı Cheesecake",
        category: "cheesecake",
        price: 260,
        description: "Frambuaz sos ile",
        icon: "fas fa-cheese"
    }
];

// DOM Elements
let currentCategory = 'all';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupEventListeners();
    setupSmoothScroll();
});

// Load products based on category
function loadProducts() {
    const grid = document.querySelector('.products-grid');
    const filteredProducts = currentCategory === 'all' 
        ? products 
        : products.filter(product => product.category === currentCategory);

    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <i class="${product.icon}"></i>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">₺${product.price}</div>
                <div class="product-actions">
                    <button class="details-btn" onclick="showProductDetails(${product.id})">Detaylar</button>
                    <button class="cart-btn" onclick="addToCart(${product.id})">Sepete Ekle</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelector('.category-btn.active').classList.remove('active');
            this.classList.add('active');
            currentCategory = this.dataset.category;
            loadProducts();
        });
    });

    // Mobile menu toggle
    document.querySelector('.nav-toggle').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });

    // Form submissions
    document.getElementById('orderForm').addEventListener('submit', handleOrderSubmit);
    document.getElementById('contactForm').addEventListener('submit', handleContactSubmit);
}

// Smooth scroll for navigation
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll to section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Show product details
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    alert(`${product.name}\n\n${product.description}\n\nFiyat: ₺${product.price}\n\nDetaylı bilgi için iletişime geçin!`);
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`🛒 ${product.name} sepete eklendi!\n\nFiyat: ₺${product.price}\n\nSiparişi tamamlamak için lütfen sipariş formunu doldurun.`);
    scrollToSection('order');
}

// Handle order form submission
function handleOrderSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderData = {
        product: formData.get('product'),
        deliveryType: formData.get('deliveryType'),
        deliveryDate: formData.get('deliveryDate'),
        notes: formData.get('notes')
    };

    // Here you would typically send this data to a server
    alert('🎉 Siparişiniz alındı!\n\nEn kısa sürede sizinle iletişime geçeceğiz.\n\nTeşekkür ederiz!');
    e.target.reset();
}

// Handle contact form submission
function handleContactSubmit(e) {
    e.preventDefault();
    alert('📧 Mesajınız gönderildi!\n\nEn kısa sürede size dönüş yapacağız.\n\nTeşekkür ederiz!');
    e.target.reset();
}

// Add some interactive features
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 249, 243, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(218, 190, 167, 0.2)';
    } else {
        header.style.background = 'rgba(255, 249, 243, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(218, 190, 167, 0.1)';
    }
});