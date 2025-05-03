const carrito = [
    {nombre: 'Monitor de 3 pulgadas', precio: 200},
    {nombre: 'Mouse gamer logitech', precio: 690},
    {nombre: 'Teclado ocelotgamer', precio: 150},
    {nombre: 'Audifonos blancos', precio: 800},
    {nombre: 'PC GAMER', precio: 200000},
    {nombre: 'Silla ergonomica', precio: 5000},
    {nombre: 'Escritorio de madera blanco', precio: 3000},
]

// .map crea un nuevo arreglo
carrito.map(function(producto){
    console.log(`${producto.nombre} - precio: ${producto.precio}` );
})

carrito.forEach(function(producto){
    console.log(`${producto.nombre} - precio: ${producto.precio}` );
})