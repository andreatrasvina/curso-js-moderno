const carrito = [
    {nombre: 'Monitor de 3 pulgadas', precio: 200},
    {nombre: 'Mouse gamer logitech', precio: 690},
    {nombre: 'Teclado ocelotgamer', precio: 150},
    {nombre: 'Audifonos blancos', precio: 800},
    {nombre: 'PC GAMER', precio: 200000},
    {nombre: 'Silla ergonomica', precio: 5000},
    {nombre: 'Escritorio de madera blanco', precio: 3000},
]

for(let i=0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}

carrito.forEach(function(producto){
    console.log(`${producto.nombre} - precio: ${producto.precio}` );
})