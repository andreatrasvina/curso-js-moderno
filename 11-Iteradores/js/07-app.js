//FOR OF ITERA SOBRE UN ARREGLO

//arreglo tradicional
const pendientes = ['tarea', 'comer', 'proyecto', 'daysi', 'yeyo'];

//arreglo de objetos
const carrito = [
    {nombre: 'Monitor de 3 pulgadas', precio: 200},
    {nombre: 'Mouse gamer logitech', precio: 690},
    {nombre: 'Teclado ocelotgamer', precio: 150},
    {nombre: 'Audifonos blancos', precio: 800, descuento: true},
    {nombre: 'PC GAMER', precio: 200000},
    {nombre: 'Silla ergonomica', precio: 5000},
    {nombre: 'Escritorio de madera blanco', precio: 3000},
]

for(let pendiente of pendientes){
    console.log(pendiente);
}

for(let producto of carrito){
    console.log(producto.nombre);
}