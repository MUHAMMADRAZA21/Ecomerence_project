let products = {
    women: [
        { name: "Evening Dress", price: 79.99, rating: 4.8, image: "dress.jpg" },
        { name: "Handbag", price: 129.99, rating: 4.3, image: "handbag.jpg" },
        { name: "Casual T-Shirt", price: 24.99, rating: 4.5, image: "tshirt.jpg" },
        { name: "Summer Sandals", price: 39.99, rating: 4.6, image: "sandals.jpg" },
        { name: "Makeup Kit", price: 49.99, rating: 4.7, image: "makeup.jpg" },
        { name: "Sports Bra", price: 29.99, rating: 4.5, image: "bra.jpg" },
        { name: "Skirt", price: 39.99, rating: 4.2, image: "skirt.jpg" },
        { name: "Winter Coat", price: 89.99, rating: 4.6, image: "coat.jpg" },
        { name: "Jewelry Set", price: 59.99, rating: 4.5, image: "jewelry.jpg" },
        { name: "Evening Shoes", price: 79.99, rating: 4.3, image: "evening_shoes.jpg" }
    ],
    men: [
        { name: "Digital Watch", price: 199.99, rating: 4.5, image: "watch.jpg" },
        { name: "Leather Shoes", price: 99.99, rating: 4.7, image: "shoes.jpg" },
        { name: "Casual T-Shirt", price: 24.99, rating: 4.4, image: "tshirt_men.jpg" },
        { name: "Gaming Laptop", price: 1299.99, rating: 4.8, image: "gaming_laptop.jpg" },
        { name: "Backpack", price: 49.99, rating: 4.5, image: "backpack.jpg" },
        { name: "Sunglasses", price: 39.99, rating: 4.5, image: "sunglasses.jpg" },
        { name: "Jeans", price: 49.99, rating: 4.2, image: "jeans.jpg" },
        { name: "Sports Jacket", price: 89.99, rating: 4.6, image: "jacket.jpg" },
        { name: "Belt", price: 19.99, rating: 4.3, image: "belt.jpg" },
        { name: "Sneakers", price: 79.99, rating: 4.5, image: "sneakers.jpg" }
    ],
    children: [
        { name: "Action Figure", price: 19.99, rating: 4.2, image: "action_figure.jpg" },
        { name: "Teddy Bear", price: 9.99, rating: 4.0, image: "teddy_bear.jpg" },
        { name: "Board Game", price: 29.99, rating: 4.7, image: "board_game.jpg" },
        { name: "Video Game Console", price: 299.99, rating: 4.5, image: "video_game_console.jpg" },
        { name: "Puzzles", price: 15.99, rating: 4.4, image: "puzzles.jpg" },
        { name: "Building Blocks", price: 24.99, rating: 4.3, image: "building_blocks.jpg" },
        { name: "Doll House", price: 49.99, rating: 4.5, image: "doll_house.jpg" },
        { name: "Race Car Set", price: 39.99, rating: 4.6, image: "race_car_set.jpg" },
        { name: "Educational Tablet", price: 99.99, rating: 4.8, image: "educational_tablet.jpg" },
        { name: "Kids' Bike", price: 149.99, rating: 4.6, image: "kids_bike.jpg" }
    ],
    electronics: [
        { name: "Gaming Laptop", price: 1299.99, rating: 4.8, image: "gaming_laptop.jpg" },
        { name: "Smartphone", price: 499.99, rating: 4.2, image: "smartphone.jpg" },
        { name: "Tablet", price: 299.99, rating: 4.0, image: "tablet.jpg" },
        { name: "4K TV", price: 799.99, rating: 4.6, image: "tv.jpg" },
        { name: "Smartwatch", price: 199.99, rating: 4.5, image: "smartwatch.jpg" },
        { name: "Bluetooth Speaker", price: 99.99, rating: 4.4, image: "bluetooth_speaker.jpg" },
        { name: "Headphones", price: 149.99, rating: 4.5, image: "headphones.jpg" },
        { name: "Camera", price: 499.99, rating: 4.7, image: "camera.jpg" },
        { name: "External Hard Drive", price: 89.99, rating: 4.3, image: "external_hard_drive.jpg" },
        { name: "Wireless Charger", price: 29.99, rating: 4.4, image: "wireless_charger.jpg" }
    ]
};

let cart = [];
let currentCategory = '';

// Function to display categories and products
function showProducts(category) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear the product list
    currentCategory = category; // Update current category

    // Display products of the selected category
    products[category].forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name}" style="width:100px; height:100px;">
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>Rating: ${product.rating.toFixed(1)}</p>
            <button onclick="addToCart('${product.name}')">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Function to add products to the cart
function addToCart(productName) {
    const product = Object.values(products).flat().find(p => p.name === productName);
    cart.push(product);
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}

// Function to toggle the cart display
function toggleCart() {
    const cartModal = document.getElementById('cart');
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
    updateCart();
}

// Function to close the cart
function closeCart() {
    document.getElementById('cart').style.display = 'none';
}

// Function to sort products by name
function sortByName() {
    if (currentCategory) {
        products[currentCategory].sort((a, b) => a.name.localeCompare(b.name));
        showProducts(currentCategory);
    }
}

// Function to sort products by price
function sortByPrice() {
    if (currentCategory) {
        products[currentCategory].sort((a, b) => a.price - b.price);
        showProducts(currentCategory);
    }
}

// Function to search products
function searchProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredProducts = Object.keys(products).reduce((acc, category) => {
        const filtered = products[category].filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
        if (filtered.length) {
            acc[category] = filtered;
        }
        return acc;
    }, {});

    displayFilteredProducts(filteredProducts);
}

// Function to display filtered products based on search
function displayFilteredProducts(filteredProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    for (const category in filteredProducts) {
        filteredProducts[category].forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <img src="${product.image}" alt="${product.name}" style="width:100px; height:100px;">
                <p>Price: $${product.price.toFixed(2)}</p>
                <p>Rating: ${product.rating.toFixed(1)}</p>
                <button onclick="addToCart('${product.name}')">Add to Cart</button>
            `;
            productList.appendChild(productDiv);
        });
    }
}

// Initialize product display on page load
document.addEventListener('DOMContentLoaded', () => {
    // Display all categories initially
    showProducts('women'); // Show women's products by default
});
