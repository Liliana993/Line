// Datos de ejemplo de productos (puedes reemplazarlos con tus propios datos)
const productos = [
    {
        nombre: "Brasil",
        precio: 100.000,
        descripcion: "#RTHUOP",
        imagen: "../img/brazil rio-4809011_1280.jpg"
    },
    {
        nombre: "Alphes",
        precio: 100.000,
        descripcion: "#RTHUOP",
        imagen: "../img/alpes-2700403_1280.jpg"
    },
    {
        nombre: "Cairo",
        precio: 100.000,
        descripcion: "#RTHUOP",
        imagen: "../img/cairo-1980350_1280.jpg"
    },
    {
        nombre: "Grecia",
        precio: 100.000,
        descripcion: "#RTHUOP",
        imagen: "../img/beach-418742_1280.jpg"
    },
    {
        nombre: "Colombia",
        precio: 100.000,
        descripcion: "#RTHUOP",
        imagen: "../img/colombia-2722841_1280.jpg"
    },
    {
        nombre: "Francia",
        precio: 100.000,
        descripcion: "#RTHUOP",
        imagen: "../img/eiffel-tower-3349075_1280.jpg"
    },
    {
        nombre: "Iguazú",
        precio: 100.000,
        descripcion: "#RTHUOP",
        imagen: "../img/foz-do-iguacu-221274_1280.jpg"
    },
    {
        nombre: "Patagonia",
        precio: 100.000,
        descripcion: "#RTHUOP",
        imagen: "../img/glaciar-4810395_1280.jpg"
    },
    {
        nombre: "Gran cañon",
        precio: 100.000,
        descripcion: "#RTHUOP",
        imagen: "../img/gran cañon-1908283_1280.jpg"
    },
    {
        nombre: "China",
        precio: 100.000,
        descripcion: "#RTHUOP",
        imagen: "../img/great-wall-of-china-3022907_1280.jpg"
    },
    {
        nombre: "Italia",
        precio: 100.000,
        descripcion: "#RTHUOP",
        imagen: "../img/italia.jpg"
    },
    {
        nombre: "México",
        precio: 100.000,
        descripcion: "#RTHUOP",
        imagen: "../img/mexico-2379694_1280.jpg"
    },
    {
        nombre: "Polynesia",
        precio: 100.000,
        descripcion: "#RTHUOP",
        imagen: "../img/polynesia-3021072_1280.jpg"
    },
    {
        nombre: "Autralia",
        precio: 100.000,
        descripcion: "#RTHUOP",
        imagen: "../img/sydney-opera-house-363244_1280.jpg"
    },
];

// Función para crear y mostrar tarjetas de productos
function mostrarTarjetas() {
    const productContainer = document.getElementById('product-container');

    // Itera sobre el array de productos
    productos.forEach((producto) => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        // Crea el contenido de la tarjeta
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
        `;

        // Agrega la tarjeta al contenedor
        productContainer.appendChild(card);
    });
}

// Llama a la función para mostrar las tarjetas de productos
mostrarTarjetas();