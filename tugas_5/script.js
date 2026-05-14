// ======================
// DATA PRODUK
// ======================

const products = [

    {
        id: 1,
        name: "Elegant Dress",
        category: "Women",
        price: 450000,
        description: "Premium elegant dress for formal and casual events.",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop",
        badge: "NEW"
    },

    {
        id: 2,
        name: "Casual Blazer",
        category: "Men",
        price: 650000,
        description: "Modern blazer with stylish and elegant design.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
        badge: "HOT"
    },

    {
        id: 3,
        name: "Luxury Handbag",
        category: "Accessories",
        price: 550000,
        description: "Premium women's bag with modern design.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
        badge: "SALE"
    },

    {
        id: 4,
        name: "Red Sneakers",
        category: "Shoes",
        price: 700000,
        description: "Trendy sneakers for daily use.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
        badge: "NEW"
    },

    {
        id: 5,
        name: "T-shirt",
        category: "Men",
        price: 320000,
        description: "Modern t-shirt with premium material.",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
        badge: "HOT"
    },

    {
        id: 6,
        name: "Heels",
        category: "Shoes",
        price: 480000,
        description: "Elegant high heels with a modern minimalist design.",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop",
        badge: "SALE"
    }

];

// ======================
// ELEMENT
// ======================

const productList = document.getElementById("product-list");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("search-input");

let cartCount = 0;

// ======================
// DISPLAY PRODUCT
// ======================

function displayProducts(productArray) {

    productList.innerHTML = "";

    productArray.forEach((product) => {

        productList.innerHTML += `

        <div class="col-lg-3 col-md-6 col-12">

            <div class="card product-card position-relative">

                <span class="badge-sale">
                    ${product.badge}
                </span>

                <img
                    src="${product.image}"
                    class="card-img-top product-image"
                    alt="${product.name}"
                >

                <div class="card-body d-flex flex-column">

                    <span class="product-category">
                        ${product.category}
                    </span>

                    <h5 class="fw-bold mt-2">
                        ${product.name}
                    </h5>

                    <p class="product-price">
                        Rp ${product.price.toLocaleString("id-ID")}
                    </p>

                    <p class="text-muted">
                        ${product.description}
                    </p>

                    <button
                        class="btn btn-maroon mt-auto detail-btn"
                        data-id="${product.id}"
                        data-bs-toggle="modal"
                        data-bs-target="#productModal"
                    >
                        View Detail
                    </button>

                </div>

            </div>

        </div>

        `;
    });

    addModalEvents();
}

// ======================
// SHOW ALL PRODUCT
// ======================

displayProducts(products);

// ======================
// FILTER CATEGORY
// ======================

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.category;

        if (category === "All") {

            displayProducts(products);

        } else {

            const filteredProducts = products.filter((product) => {
                return product.category === category;
            });

            displayProducts(filteredProducts);
        }
    });
});

// ======================
// SEARCH PRODUCT
// ======================

searchInput.addEventListener("keyup", () => {

    const keyword = searchInput.value.toLowerCase();

    const searchResult = products.filter((product) => {

        return product.name.toLowerCase().includes(keyword);

    });

    displayProducts(searchResult);

});

// ======================
// MODAL DETAIL
// ======================

function addModalEvents() {

    const detailButtons = document.querySelectorAll(".detail-btn");

    detailButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const productId = parseInt(button.dataset.id);

            const selectedProduct = products.find((product) => {
                return product.id === productId;
            });

            document.getElementById("modal-image").src =
                selectedProduct.image;

            document.getElementById("modal-category").innerText =
                selectedProduct.category;

            document.getElementById("modal-title").innerText =
                selectedProduct.name;

            document.getElementById("modal-price").innerText =
                selectedProduct.price.toLocaleString("id-ID");

            document.getElementById("modal-description").innerText =
                selectedProduct.description;

            // ADD TO CART
            const addToCartBtn =
                document.getElementById("add-to-cart-btn");

            addToCartBtn.onclick = () => {

                // CEK APAKAH PRODUK SUDAH ADA
                const existingProduct = cartItems.find((item) => {
                    return item.id === selectedProduct.id;
                });

                // JIKA SUDAH ADA
                if (existingProduct) {

                    existingProduct.quantity++;

                }

                // JIKA BELUM ADA
                else {

                    cartItems.push({
                        ...selectedProduct,
                        quantity: 1
                    });
                }

                // UPDATE UI
                updateCartUI();

                updateCartCount();

                alert(`${selectedProduct.name} added to cart!`);
            };

        });

    });

}

// ======================
// SEARCH BUTTON
// ======================

const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {

    document
        .getElementById("search-input")
        .focus();

});

// ======================
// CART DROPDOWN
// ======================

const cartBtn = document.getElementById("cart-btn");
const cartDropdown = document.getElementById("cart-dropdown");

cartBtn.addEventListener("click", () => {

    cartDropdown.classList.toggle("show");

});

// ======================
// CART DATA
// ======================

const cartItems = [];

// ======================
// UPDATE CART UI
// ======================

function updateCartUI() {

    const cartItemsElement =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");

    cartItemsElement.innerHTML = "";

    // EMPTY CART

    if (cartItems.length === 0) {

        cartItemsElement.innerHTML = `
            <div class="empty-cart">
                Cart is empty
            </div>
        `;

        cartTotal.innerText = "Rp 0";

        return;
    }

    let total = 0;

    // LOOP CART

    cartItems.forEach((item, index) => {

        total += item.price * item.quantity;

        cartItemsElement.innerHTML += `

        <div class="cart-item">

            <div class="cart-item-info">

                <h6>
                    ${item.name}
                </h6>

                <div class="cart-item-price">
                    Rp ${(item.price * item.quantity)
                        .toLocaleString("id-ID")}
                </div>

                <!-- QUANTITY -->
                <div class="cart-actions">

                    <button
                        class="qty-btn minus-btn"
                        data-index="${index}"
                    >
                        -
                    </button>

                    <span class="qty-number">
                        ${item.quantity}
                    </span>

                    <button
                        class="qty-btn plus-btn"
                        data-index="${index}"
                    >
                        +
                    </button>

                    <!-- DELETE -->
                    <button
                        class="delete-btn"
                        data-index="${index}"
                    >
                        <i class="bi bi-trash"></i>
                    </button>

                </div>

            </div>

        </div>

        `;
    });

    // TOTAL

    cartTotal.innerText =
        `Rp ${total.toLocaleString("id-ID")}`;

    // ======================
    // PLUS BUTTON
    // ======================

    document.querySelectorAll(".plus-btn")
        .forEach((button) => {

        button.addEventListener("click", () => {

            const index =
                button.dataset.index;

            cartItems[index].quantity++;

            updateCartUI();
        });
    });

    // ======================
    // MINUS BUTTON
    // ======================

    document.querySelectorAll(".minus-btn")
        .forEach((button) => {

        button.addEventListener("click", () => {

            const index =
                button.dataset.index;

            cartItems[index].quantity--;

            // HAPUS JIKA 0
            if (cartItems[index].quantity <= 0) {

                cartItems.splice(index, 1);
            }

            updateCartUI();

            updateCartCount();
        });
    });

    // ======================
    // DELETE BUTTON
    // ======================

    document.querySelectorAll(".delete-btn")
        .forEach((button) => {

        button.addEventListener("click", () => {

            const index =
                button.dataset.index;

            cartItems.splice(index, 1);

            updateCartUI();

            updateCartCount();
        });
    });
}

// ======================
// UPDATE CART COUNT
// ======================

function updateCartCount() {

    let totalQty = 0;

    cartItems.forEach((item) => {

        totalQty += item.quantity;
    });

    document.getElementById("cart-count")
        .innerText = totalQty;
}

