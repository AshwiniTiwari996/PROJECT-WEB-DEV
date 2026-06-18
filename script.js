
const products = [
    { id: 1, name: "Samsung Galaxy M14", price: "₹12,490", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop" },
    { id: 2, name: "Wireless Bluetooth Headphones", price: "₹1,299", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop" },
    { id: 3, name: "Smart Fitness Watch", price: "₹2,499", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop" },
    { id: 4, name: "Men's Running Shoes", price: "₹1,899", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop" }
];

let cartCount = 0;


function displayProducts(productsArray) {
    const productGrid = document.getElementById("product-list");
    productGrid.innerHTML = ""; 

    if (productsArray.length === 0) {
        productGrid.innerHTML = "<p>No products found.</p>";
        return;
    }

    productsArray.forEach(product => {
        productGrid.innerHTML += `
            <div class="product-card">
                <img src="${product.img}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p class="price">${product.price}</p>
                <button class="add-btn" onclick="addToCart()">Add to Cart</button>
            </div>
        `;
    });
}


function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
    alert("Item added to cart successfully!");
}


function searchProducts() {
    const searchText = document.getElementById("search-input").value.toLowerCase();
    
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchText);
    });

    displayProducts(filteredProducts);
}


window.onload = function() {
    displayProducts(products);
};
