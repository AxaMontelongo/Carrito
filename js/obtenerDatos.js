fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(data => {
    let productsDiv = document.getElementById('products');
    let cart = [];

    data.forEach(product => {
        let productCard = document.createElement('div');
        productCard.classList.add('col-lg-3', 'col-md-4', 'mb-4');
        productCard.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top mx-auto d-block" style="max-height: 200px; width: auto;" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">Precio: $${product.price}</p>
                    <button onclick="addToCart(${product.id})" class="btn btn-primary mx-auto d-block">Agregar al carrito</button>
                </div>
            </div>
        `;
        productsDiv.appendChild(productCard);
    });

    // Función para agregar productos al carrito
    window.addToCart = (productId) => {
        let product = data.find(item => item.id === productId);
        cart.push(product);
        renderCart();
    };

    // Renderizar el carrito de compras
    function renderCart() {
        let cartList = document.getElementById('cart');
        cartList.innerHTML = '';
        cart.forEach(item => {
            let li = document.createElement('li');
            li.classList.add('list-group-item');
            li.innerText = `${item.title} - $${item.price}`;
            cartList.appendChild(li);
        });
    }
})
.catch(error => console.error('Error al obtener productos:', error));