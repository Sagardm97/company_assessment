let listContainerElement = document.getElementById("listContainer");
let shoppingCartBtn = document.getElementById('shoppingCartBtn');
let checkoutDetailsBtn = document.getElementById('checkoutDetailsBtn');
let orderCompleteBtn = document.getElementById('orderCompleteBtn');
let productsData = [];

let currentClicked = "";

function onClickShoppingCart() {
    currentClicked = "Shopping Cart";
    renderProducts();
    setActiveButton(shoppingCartBtn);
}

function onClickCheckoutDetails() {
    currentClicked = "Checkout Details";
    renderProducts();
    setActiveButton(checkoutDetailsBtn);
}

function onClickOrderComplete() {
    currentClicked = "Order Complete";
    renderProducts();
    setActiveButton(orderCompleteBtn);
}

function renderProducts() {
    listContainerElement.innerHTML = '';
    productsData.forEach((product) => {
        if (product.category_name === currentClicked) {
            createProductCard(product);
        }
    });
}

function createProductCard(product) {
    product.category_products.forEach((variant) => {
        const listElement = document.createElement('li');
        const productCard = document.createElement('div');
        const productImage = document.createElement('img');
        const titleContainer = document.createElement('div');
        const titleEl = document.createElement('h2');
        const vendorEl = document.createEle
    })
    function showSection(sectionId) {
        // Hide all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
    
        // Show the selected section
        const selectedSection = document.querySelector(`.${sectionId}`);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
    }
}
    