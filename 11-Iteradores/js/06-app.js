//FOR EACH ES IDEAL PARA RECORRER ARREGLOS

const pendientes = ['tarea', 'comer', 'proyecto', 'daysi', 'yeyo'];

pendientes.forEach( (pendiente, index) => {
    console.log(index + ' : ' + pendiente);
});

const carrito = [
    {nombre: 'Monitor de 3 pulgadas', precio: 200},
    {nombre: 'Mouse gamer logitech', precio: 690},
    {nombre: 'Teclado ocelotgamer', precio: 150},
    {nombre: 'Audifonos blancos', precio: 800, descuento: true},
    {nombre: 'PC GAMER', precio: 200000},
    {nombre: 'Silla ergonomica', precio: 5000},
    {nombre: 'Escritorio de madera blanco', precio: 3000},
]

//FOR EACH
carrito.forEach( (producto) => {
    console.log(producto.nombre);
});

//MAP
const nuevoArreglo = carrito.map( (producto) => {
    return producto.nombre;
});

console.log(nuevoArreglo);
