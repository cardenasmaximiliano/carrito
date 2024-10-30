const productos = [
    { id: 1, nombre: 'Producto 1', precio: 100, imagen: './assets/fanta.png' },
    { id: 2, nombre: 'Producto 2', precio: 200, imagen: '' },
    { id: 3, nombre: 'Producto 3', precio: 300, imagen: '' }
];


const carrito = [];


const listaProductos = document.getElementById('lista-productos');
const itemsCarrito = document.getElementById('items-carrito');
const precioTotal = document.getElementById('precio-total');
const contadorCarrito = document.getElementById('contador-carrito');
const carritoSeccion = document.getElementById('carrito');


function renderizarProductos() {
    productos.forEach(producto => {
        const tarjetaProducto = document.createElement('div');
        tarjetaProducto.classList.add('tarjeta-producto');
        tarjetaProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        `;
        listaProductos.appendChild(tarjetaProducto);
    });
}

renderizarProductos();